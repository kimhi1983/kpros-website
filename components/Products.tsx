import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Product, Category } from '../types';
import { X, ArrowRight, Info } from 'lucide-react';

const Products: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>(['All']);

  useEffect(() => {
    fetch('/products.json')
      .then((res) => res.json())
      .then((data: Product[]) => {
        setProducts(data);
        // Extract unique categories
        const uniqueCats = Array.from(new Set(data.map(p => p.category))).filter(Boolean);
        setCategories(['All', ...uniqueCats]);
      })
      .catch((err) => console.error('Failed to load products:', err));
  }, []);

  const filteredProducts = activeCategory === 'All'
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <section id="products" className="py-24 bg-[#F5F5F3] min-h-screen">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-slate-800 mb-4">Smart Data</h2>
          <p className="text-slate-500 font-light max-w-xl mx-auto">
            Explore our curated library of high-performance ingredients.
          </p>
        </div>

        {/* Quick Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${activeCategory === cat
                  ? 'bg-slate-800 text-white border-slate-800 shadow-md transform scale-105'
                  : 'bg-white text-slate-500 border-slate-200 hover:border-slate-400 hover:text-slate-700'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredProducts.map((product) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                key={product.id}
                onClick={() => setSelectedProduct(product)}
                className="group relative bg-white rounded-2xl p-6 shadow-sm border border-slate-100 cursor-pointer hover:shadow-xl hover:border-slate-200 transition-all duration-300 overflow-hidden"
              >
                {/* 3D Hover Effect - Simple Scale/Lift implementation via CSS/Framer */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-slate-50 rounded-bl-full -mr-4 -mt-4 opacity-50 group-hover:scale-150 transition-transform duration-500 ease-out" />

                <div className="relative z-10">
                  <span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-4">
                    {product.category}
                  </span>
                  <h3 className="text-xl font-medium text-slate-800 mb-2 group-hover:text-teal-700 transition-colors">
                    {product.item}
                  </h3>
                  <p className="text-sm text-slate-400 line-clamp-2 mb-4 font-light">
                    {product.description}
                  </p>

                  <div className="flex items-center text-xs text-slate-500 font-semibold mt-auto pt-4 border-t border-slate-50">
                    <span className="flex items-center group-hover:translate-x-1 transition-transform">
                      View Spec <ArrowRight size={14} className="ml-1" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Data Detail Popup (Modal) */}
        <AnimatePresence>
          {selectedProduct && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
                onClick={() => setSelectedProduct(null)}
              />

              <motion.div
                layoutId={`product-${selectedProduct.id}`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden z-10"
              >
                {/* Modal Header */}
                <div className="bg-slate-50 p-6 border-b border-slate-100 flex justify-between items-start">
                  <div>
                    <span className="text-xs font-bold text-teal-600 uppercase tracking-widest">
                      {selectedProduct.brand || 'KPROS'}
                    </span>
                    <h3 className="text-2xl font-semibold text-slate-800 mt-1">{selectedProduct.item}</h3>
                  </div>
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="p-2 bg-white rounded-full text-slate-400 hover:text-slate-800 transition-colors shadow-sm"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Modal Body */}
                <div className="p-8 space-y-6">
                  <div>
                    <h4 className="flex items-center text-sm font-semibold text-slate-400 uppercase tracking-wide mb-2">
                      <Info size={14} className="mr-2" /> Description
                    </h4>
                    <p className="text-slate-600 font-light leading-relaxed">
                      {selectedProduct.description}
                    </p>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-2">INCI Name</h4>
                    <p className="text-sm font-medium text-slate-800 font-mono">
                      {selectedProduct.inciName}
                    </p>
                  </div>

                  <div className="pt-4 flex space-x-3">
                    <button className="flex-1 py-3 bg-slate-800 text-white rounded-xl text-sm font-medium hover:bg-slate-900 transition-colors">
                      Request Sample
                    </button>
                    <button className="flex-1 py-3 border border-slate-200 text-slate-600 rounded-xl text-sm font-medium hover:bg-slate-50 transition-colors">
                      Download TDS
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Products;