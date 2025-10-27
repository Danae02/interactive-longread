import React from 'react';
import { X } from 'lucide-react';

const StatsPopup = ({ onClose }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
            <div className="bg-white text-neutral-900 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-2xl font-bold">Geslachte dieren in 2023</h3>
                        <button
                            onClick={onClose}
                            className="text-neutral-500 hover:text-neutral-700"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    <div className="mb-6">
                        <p className="text-lg mb-4">
                            In 2023 werden in Nederland <strong>533.456.900 landbouwdieren</strong> geslacht.
                            Dit cijfer is gebaseerd op CBS StatLine en omvat alle diercategorieën.
                        </p>

                        <div className="bg-neutral-50 p-4 rounded-lg mb-4">
                            <h4 className="font-bold mb-3">Verdeling per diersoort:</h4>
                            <ul className="space-y-2">
                                <li className="flex justify-between"><span>Vleeskuikens:</span><span className="font-bold">492.173.500</span></li>
                                <li className="flex justify-between"><span>Overige kippen:</span><span className="font-bold">18.624.400</span></li>
                                <li className="flex justify-between"><span>Varkens:</span><span className="font-bold">14.749.500</span></li>
                                <li className="flex justify-between"><span>Rundvee (totaal):</span><span className="font-bold">2.142.500</span></li>
                                <li className="flex justify-between"><span>Kalveren (&lt;9 maanden):</span><span className="font-bold">1.405.600</span></li>
                                <li className="flex justify-between"><span>Kalveren (9–12 maanden):</span><span className="font-bold">151.900</span></li>
                                <li className="flex justify-between"><span>Schapen en lammeren:</span><span className="font-bold">737.900</span></li>
                                <li className="flex justify-between"><span>Schapenlammeren:</span><span className="font-bold">538.600</span></li>
                                <li className="flex justify-between"><span>Geiten:</span><span className="font-bold">200.900</span></li>
                                <li className="flex justify-between"><span>Eenhoevigen:</span><span className="font-bold">2.300</span></li>
                                <li className="flex justify-between"><span>Kalkoenen:</span><span className="font-bold">2.300</span></li>
                            </ul>
                        </div>

                        <div className="text-sm text-neutral-600">
                            <p className="mb-2">
                                <strong>Opmerking:</strong> Het totaal van 533.456.900 dieren is de som van alle beschikbare categorieën zonder afronding.
                            </p>
                            Bron geslacht in 2023: <a href="https://opendata.cbs.nl/#/CBS/nl/dataset/7123slac/table?fromstatweb" target="_blank" rel="noreferrer" className="underline hover:text-blue-600">CBS StatLine</a>
                        </div>
                    </div>

                    <button
                        onClick={onClose}
                        className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition-colors font-semibold"
                    >
                        Sluiten
                    </button>
                </div>
            </div>
        </div>
    );
};

export default StatsPopup;