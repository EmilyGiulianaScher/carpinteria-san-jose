import { useState, useMemo } from "react";
import { useCatalog } from "./hooks/useCatalog";
import ContactSection from "./components/contactSection/contactSection";
import Navbar from "./components/navBar/navBar";
import ProductCard from "./components/productCard/productCard";
import ProductModal from "./components/productModal/productModal";
import HeroCarousel from "./components/heroCarousel/heroCarousel";
import Footer from "./components/footer/footer";
import FloatingWhatsApp from "./components/floatingWhatsApp/floatingWhatsApp";
import { CLIENT_CONFIG } from "./config";

function App() {
  const { products, loading, error } = useCatalog();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = useMemo(() => {
    const uniqueCategories = new Set(
      products.map(
        (p) =>
          p.category?.trim().charAt(0).toUpperCase() +
            p.category?.trim().slice(1).toLowerCase() || "Varios",
      ),
    );
    return ["Todos", ...Array.from(uniqueCategories)];
  }, [products]);

  const filteredProducts = products.filter((p) => {
    const catFormatted =
      p.category?.trim().charAt(0).toUpperCase() +
        p.category?.trim().slice(1).toLowerCase() || "Varios";
    const matchesCategory =
      selectedCategory === "Todos" || catFormatted === selectedCategory;
    const matchesSearch = p.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredProducts = products.filter((p) => p.isFeatured);

  if (loading)
    return (
      <div style={{ textAlign: "center", marginTop: 50 }}>
        Cargando catálogo...
      </div>
    );
  if (error)
    return (
      <div style={{ color: "red", textAlign: "center", marginTop: 50 }}>
        Error: {error}
      </div>
    );

  return (
    <div>
      <Navbar
        categories={categories}
        onCategorySelect={(cat) => {
          setSelectedCategory(cat);
          setSearchTerm("");
        }}
        onSearch={setSearchTerm}
        searchTerm={searchTerm}
      />

      {/* --- BLOQUE DE INICIO (HOME) --- */}
      {/* Se muestra solo si no hay búsqueda y la categoría es "Todos" */}
      {selectedCategory === "Todos" && searchTerm === "" && (
        <>
          <div
            style={{
              textAlign: "center",
              marginBottom: "2rem",
              marginTop: "1rem",
            }}
          >
            <h1
              style={{
                fontSize: "clamp(1.8rem, 5vw, 3rem)",
                marginBottom: "0.5rem",
                color: "var(--color-primary)",
                fontFamily: "Merriweather, serif",
                lineHeight:
                  "1.2",
                padding:
                  "0 10px",
              }}
            >
              {CLIENT_CONFIG.storeName}
            </h1>
            <p style={{ color: "#666" }}>Diseños a medida</p>
          </div>

          <div className="container">
            <HeroCarousel
              featuredProducts={featuredProducts}
              onSelect={setSelectedProduct}
            />
          </div>
        </>
      )}

      {/* --- BLOQUE DE LISTADO DE PRODUCTOS --- */}
      <div className="container">
        <h2
          style={{
            marginTop: "40px",
            fontSize: "1.5rem",
            borderBottom: "1px solid #eee",
            paddingBottom: "10px",
            color: "var(--color-text)",
          }}
        >
          {searchTerm ? `Resultados para: "${searchTerm}"` : "Nuestro Catálogo"}
        </h2>

        <div className="category-filter" style={{ marginTop: "20px" }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setSearchTerm("");
              }}
              className={`category-btn ${
                selectedCategory === cat ? "active" : ""
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <p style={{ marginBottom: "20px", color: "#888", fontSize: "0.9rem" }}>
          {filteredProducts.length} productos encontrados
        </p>

        <div className="grid-products">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              style={{ cursor: "pointer" }}
            >
              <ProductCard product={product} />
            </div>
          ))}

          {filteredProducts.length === 0 && (
            <div
              style={{
                gridColumn: "1 / -1",
                textAlign: "center",
                padding: "60px",
                color: "#888",
              }}
            >
              <div style={{ fontSize: "3rem", marginBottom: "10px" }}>😕</div>
              No encontramos productos con ese nombre.
              <br />
              <button
                onClick={() => {
                  setSelectedCategory("Todos");
                  setSearchTerm("");
                }}
                style={{
                  marginTop: "15px",
                  padding: "10px 20px",
                  border: "none",
                  background: "var(--color-primary)",
                  color: "white",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Ver todos los productos
              </button>
            </div>
          )}
        </div>
      </div>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          allProducts={products}
          onClose={() => setSelectedProduct(null)}
          onSelect={setSelectedProduct}
        />
      )}

      <ContactSection />
      <Footer
        categories={categories}
        onCategorySelect={(cat) => {
          setSelectedCategory(cat);
          setSearchTerm("");
        }}
      />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
