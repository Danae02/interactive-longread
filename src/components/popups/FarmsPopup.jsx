import React from 'react';
import { X, TrendingUp, PieChart } from 'lucide-react';

const FarmsPopup = ({ onClose }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
            <div className="bg-white text-neutral-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-2xl font-bold">Veehouderijen in Nederland</h3>
                        <button
                            onClick={onClose}
                            className="text-neutral-500 hover:text-neutral-700"
                        >
                            <X size={24}/>
                        </button>
                    </div>

                    <div className="mb-6">
                        <p className="text-neutral-600 text-sm italic border-b pb-4">
                            <strong>Let op:</strong> Deze cijfers tonen alleen de gespecialiseerde veehouderij.
                            Akkerbouw, tuinbouw en gemengde bedrijven (combinaties van gewassen en vee) zijn niet
                            meegenomen.
                        </p>
                    </div>

                    <div className="mb-6">
                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <div className="bg-blue-50 p-4 rounded-lg">
                                <div className="flex items-center mb-3">
                                    <TrendingUp className="text-blue-600 mr-2" size={20}/>
                                    <h4 className="font-bold text-blue-900">Totale Sector</h4>
                                </div>
                                <div className="space-y-2 text-blue-800">
                                    <div className="flex justify-between">
                                        <span>Totaal aantal bedrijven:</span>
                                        <span className="font-bold">49.900</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Totale omzet:</span>
                                        <span className="font-bold">€33,9 miljard</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-green-50 p-4 rounded-lg">
                                <div className="flex items-center mb-3">
                                    <PieChart className="text-green-600 mr-2" size={20}/>
                                    <h4 className="font-bold text-green-900">Verdeling</h4>
                                </div>
                                <div className="space-y-2 text-green-800">
                                    <div className="flex justify-between">
                                        <span>Graasdierbedrijven:</span>
                                        <span className="font-bold">24.185</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Hokdierbedrijven:</span>
                                        <span className="font-bold">3.435</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Combinaties:</span>
                                        <span className="font-bold">357</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Gedetailleerde verdeling */}
                        <div className="mb-6">
                            <h4 className="font-bold mb-4 text-lg border-b pb-2">📊 Gedetailleerde verdeling per
                                sector</h4>

                            <div className="grid md:grid-cols-2 gap-4">
                                {/* Graasdierbedrijven */}
                                <div className="bg-emerald-50 p-4 rounded-lg">
                                    <h5 className="font-bold mb-3 text-emerald-900">🐄 Graasdierbedrijven (24.185
                                        bedrijven)</h5>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex justify-between">
                                            <span>Melkveebedrijven:</span>
                                            <span className="font-bold">12.809</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Vleeskalveren:</span>
                                            <span className="font-bold">1.084</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Overige rundvee:</span>
                                            <span className="font-bold">4.499</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Schapenbedrijven:</span>
                                            <span className="font-bold">2.007</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Geitenbedrijven:</span>
                                            <span className="font-bold">413</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Paarden/pony's:</span>
                                            <span className="font-bold">2.029</span>
                                        </div>
                                        <div className="border-t pt-2 mt-2">
                                            <div className="flex justify-between font-bold">
                                                <span>Totale omzet:</span>
                                                <span>€10,9 mrd</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Hokdierbedrijven */}
                                <div className="bg-amber-50 p-4 rounded-lg">
                                    <h5 className="font-bold mb-3 text-amber-900">🐖 Hokdierbedrijven (3.435
                                        bedrijven)</h5>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex justify-between">
                                            <span>Fokzeugenbedrijven:</span>
                                            <span className="font-bold">508</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Vleesvarkens:</span>
                                            <span className="font-bold">1.018</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Overige varkens:</span>
                                            <span className="font-bold">438</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Leghennen:</span>
                                            <span className="font-bold">560</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Vleeskuikens:</span>
                                            <span className="font-bold">486</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Overig pluimvee:</span>
                                            <span className="font-bold">370</span>
                                        </div>
                                        <div className="border-t pt-2 mt-2">
                                            <div className="flex justify-between font-bold">
                                                <span>Totale omzet:</span>
                                                <span>€5,9 mrd</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Combinaties */}
                            <div className="bg-purple-50 p-4 rounded-lg mt-4">
                                <h5 className="font-bold mb-3 text-purple-900">🧩 Veeteeltcombinaties (357
                                    bedrijven)</h5>
                                <div className="grid md:grid-cols-2 gap-4 text-sm">
                                    <div>
                                        <div className="flex justify-between">
                                            <span>Voornamelijk graasdieren:</span>
                                            <span className="font-bold">169</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Voornamelijk hokdieren:</span>
                                            <span className="font-bold">188</span>
                                        </div>
                                    </div>
                                    <div className="border-t md:border-t-0 md:border-l md:pl-4 pt-2 md:pt-0">
                                        <div className="flex justify-between font-bold">
                                            <span>Totale omzet:</span>
                                            <span>€414,3 miljoen</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Belangrijkste inzichten */}
                        <div
                            className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-200">
                            <h4 className="font-bold mb-3 text-blue-900">💡 Belangrijkste inzichten</h4>
                            <ul className="space-y-2 text-blue-800 text-sm">
                                <li>• <strong>Melkveebedrijven</strong> vormen de grootste groep met 12.809 bedrijven
                                </li>
                                <li>• <strong>Hokdierbedrijven</strong> zijn minder talrijk maar hebben een hoge omzet
                                    per bedrijf
                                </li>
                                <li>• De sector vertegenwoordigt een totale omzet van <strong>€33,9 miljard</strong>
                                </li>
                                <li>• Er is een trend naar <strong>schaalvergroting</strong> en specialisatie</li>
                            </ul>
                        </div>
                    </div>

                    <div className="text-sm text-neutral-600 mb-4">
                        <p><strong>Bron:</strong> CBS Landbouw; kwartaalcijfers omzet landbouwbedrijven: <a
                            href="https://opendata.cbs.nl/#/CBS/nl/dataset/85159NED/table" target="_blank"
                            rel="noreferrer" className="underline hover:text-blue-600">CBS StatLine</a></p>
                        <p className="text-xs mt-1">* Cijfers zijn gebaseerd op de meest recente beschikbare data en
                            kunnen kleine afwijkingen bevatten door afronding.</p>
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

export default FarmsPopup;