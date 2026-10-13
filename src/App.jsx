import { Fragment, useMemo, useState } from "react";
import { useCatalog } from "./hooks/useCatalog";
import ContactSection from "./components/contactSection/contactSection";
import Navbar from "./components/navBar/navBar";
import Hero from "./components/hero/hero";
import Features from "./components/features/features";
import AboutSection from "./components/aboutSection/aboutSection";
import LineSection from "./components/lineSection/lineSection";
import ProductModal from "./components/productModal/productModal";
import Footer from "./components/footer/footer";
import FloatingWhatsApp from "./components/floatingWhatsApp/floatingWhatsApp";
import { LINES } from "./utils/lines";

function App() {
  const { products, loading, error } = useCatalog();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const visibleProducts = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    return term ? products.filter((p) => p.name.toLowerCase().includes(term)) : products;
  }, [products, searchTerm]);

  const furniture = products.filter((p) => p.line === "muebles");
  const aboutImage = (furniture[1] ?? furniture[0])?.coverImage;

  if (loading) {
    return <div style={{ textAlign: "center", marginTop: 50 }}>Cargando catálogo...</div>;
  }
  if (error) {
    return <div style={{ color: "red", textAlign: "center", marginTop: 50 }}>Error: {error}</div>;
  }

  return (
    <div id="inicio">
      <Navbar onSearch={setSearchTerm} searchTerm={searchTerm} />

      {/* Con una busqueda activa se muestran solo los resultados, agrupados por linea. */}
      {searchTerm.trim() === "" && (
        <>
          <Hero products={products} onSelect={setSelectedProduct} />
          <Features />
        </>
      )}

      {LINES.map((line) => (
        <Fragment key={line.id}>
          <LineSection
            line={line}
            products={visibleProducts.filter((p) => p.line === line.id)}
            onSelect={setSelectedProduct}
          />
          {/* Sobre nosotros va entre Muebles (el foco) y Hogar. */}
          {line.id === "muebles" && searchTerm.trim() === "" && (
            <AboutSection image={aboutImage} />
          )}
        </Fragment>
      ))}

      {visibleProducts.length === 0 && (
        <p style={{ textAlign: "center", padding: "80px 20px" }}>
          No encontramos productos con ese nombre.
        </p>
      )}

      {selectedProduct && (
        <ProductModal
          key={selectedProduct.id}
          product={selectedProduct}
          allProducts={products}
          onClose={() => setSelectedProduct(null)}
          onSelect={setSelectedProduct}
        />
      )}

      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
