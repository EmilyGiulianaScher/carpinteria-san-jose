import { useMemo, useState } from "react";
import { useCatalog } from "./hooks/useCatalog";
import ContactSection from "./components/contactSection/contactSection";
import Navbar from "./components/navBar/navBar";
import Hero from "./components/hero/hero";
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
      {searchTerm.trim() === "" && <Hero products={products} />}

      {LINES.map((line) => (
        <LineSection
          key={line.id}
          line={line}
          products={visibleProducts.filter((p) => p.line === line.id)}
          onSelect={setSelectedProduct}
        />
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
