import React, {useEffect, useState} from 'react'
import Substrate from '../components/Substrate'
import {defaultPrecision} from "../settings";
import {materialOptions} from "../settings";

const Substrates = ({substrates, isFilter}) => {
  const [material, setMaterial] = useState("All")
  const [specificMeltingEnthalpyMin, setSpecificMeltingEnthalpyMin] = useState(0)
  const [specificMeltingEnthalpyMax, setSpecificMeltingEnthalpyMax] = useState(9999)
  const [liquidSurfaceAbsorptivityMin, setLiquidSurfaceAbsorptivityMin] = useState(0)
  const [liquidSurfaceAbsorptivityMax, setLiquidSurfaceAbsorptivityMax] = useState(9999)
  const [thermalConductivityMin, setThermalConductivityMin] = useState(0)
  const [thermalConductivityMax, setThermalConductivityMax] = useState(9999)
  const [specificHeatMin, setSpecificHeatMin] = useState(0)
  const [specificHeatMax, setSpecificHeatMax] = useState(9999)
  const [filteredSubstrates, setFilteredSubstrates] = useState(substrates)

  useEffect(() => {
    const filtered = substrates.filter((substrate) => {
      const mater = substrate.material.value
      const specificMeltingEnthalpy = substrate.specificMeltingEnthalpy.value
      const liquidSurfaceAbsorptivity = substrate.liquidSurfaceAbsorptivity.value
      const thermalConductivity = substrate.thermalConductivity.value
      const specificHeat = substrate.specificHeat.value
      return (material === 'All' || mater === material)
        && (specificMeltingEnthalpy === null || (specificMeltingEnthalpyMin <= specificMeltingEnthalpy && specificMeltingEnthalpy <= specificMeltingEnthalpyMax))
        && (liquidSurfaceAbsorptivity === null || (liquidSurfaceAbsorptivityMin <= liquidSurfaceAbsorptivity && liquidSurfaceAbsorptivity <= liquidSurfaceAbsorptivityMax))
        && (thermalConductivity === null || (thermalConductivityMin <= thermalConductivity && thermalConductivity <= thermalConductivityMax))
        && (specificHeat === null || (specificHeatMin <= specificHeat && specificHeat <= specificHeatMax))
    })
    setFilteredSubstrates(filtered)
  }, [substrates, material, specificMeltingEnthalpyMin, specificMeltingEnthalpyMax, liquidSurfaceAbsorptivityMin, liquidSurfaceAbsorptivityMax, thermalConductivityMin, thermalConductivityMax, specificHeatMin, specificHeatMax])
  if (!substrates) {
    return null
  }
  let scrollbarClass = 'w-full'
  let searchBar
  if (!isFilter) {
    scrollbarClass += ' border p-3 h-screen-3/4 overflow-y-scroll'
    searchBar =
      <div className='flex flex-col border rounded mb-2 p-2'>
        <h6 className='block tracking-wide text-gray-700 font-bold align-middle mx-auto'> Material</h6>
        <div className='flex flex-row justify-center my-2'>
          <div className="w-full md:w-2/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="material">
              Option
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="material"
                onChange={e => setMaterial(e.target.value)}>
                <option>All</option>
                {
                  materialOptions.map((option, i) =>
                    <option key={i}>{option}</option>
                  )
                }
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <hr/>
        <h6 className='block tracking-wide text-gray-700 font-bold align-middle mx-auto'>
          Specific Melting Enthalpy Range (TODO:UNIT?)
        </h6>
        <div className='flex flex-row justify-center my-2'>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                   htmlFor="specific-melting-enthalpy-min">
              min
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="specific-melting-enthalpy-min" type="number" step={defaultPrecision} value={specificMeltingEnthalpyMin}
              onChange={(e) => setSpecificMeltingEnthalpyMin(e.target.value)}
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                   htmlFor="specific-melting-enthalpy-max">
              max
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="specific-melting-enthalpy-max" type="number" step={defaultPrecision} value={specificMeltingEnthalpyMax} min={specificMeltingEnthalpyMin}
              onChange={(e) => setSpecificMeltingEnthalpyMax(e.target.value)}
            />
          </div>
        </div>
        <hr/>
        <h6 className='block tracking-wide text-gray-700 font-bold align-middle mx-auto my-2'>
          Liquid Surface Absorptivity Range (TODO:UNIT?)
        </h6>
        <div className='flex flex-row justify-center my-2'>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                   htmlFor="liquid-surface-absorptivity-min">
              min
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="liquid-surface-absorptivity-min" type="number" step={defaultPrecision} value={liquidSurfaceAbsorptivityMin}
              onChange={(e) => setLiquidSurfaceAbsorptivityMin(e.target.value)}
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                   htmlFor="liquid-surface-absorptivity-max">
              max
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="liquid-surface-absorptivity-max" type="number" step={defaultPrecision} value={liquidSurfaceAbsorptivityMax} min={liquidSurfaceAbsorptivityMin}
              onChange={(e) => setLiquidSurfaceAbsorptivityMax(e.target.value)}
            />
          </div>
        </div>
        <hr/>
        <h6 className='block tracking-wide text-gray-700 font-bold align-middle mx-auto my-2'>
          Thermal Conductivity Range (TODO:UNIT?)
        </h6>
        <div className='flex flex-row justify-center my-2'>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="thermal-conductivity-min">
              min
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="thermal-conductivity-min" type="number" step={defaultPrecision} value={thermalConductivityMin}
              onChange={(e) => setThermalConductivityMin(e.target.value)}
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="thermal-conductivity-max">
              max
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="thermal-conductivity-max" type="number" step={defaultPrecision} value={thermalConductivityMax} min={thermalConductivityMin}
              onChange={(e) => setThermalConductivityMax(e.target.value)}
            />
          </div>
        </div>
        <hr/>
        <h6 className='block tracking-wide text-gray-700 font-bold align-middle mx-auto my-2'>
          Surface Area Range (mm&sup2;)
        </h6>
        <div className='flex flex-row justify-center my-2'>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                   htmlFor="specific-heat-min">
              min
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="specific-heat-min" type="number" step={defaultPrecision} value={specificHeatMin}
              onChange={(e) => setSpecificHeatMin(e.target.value)}
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                   htmlFor="specific-heat-max">
              max
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="specific-heat-max" type="number" step={defaultPrecision} value={specificHeatMax} min={specificHeatMin}
              onChange={(e) => setSpecificHeatMax(e.target.value)}
            />
          </div>
        </div>
      </div>
  }

  return (
    <>
      {searchBar}
      <div className={scrollbarClass}>
        {filteredSubstrates.map((substrate, i) =>
          <Substrate
            key={substrate.id}
            id={substrate.id}
            material={substrate.material.value}
            specificMeltingEnthalpy={substrate.specificMeltingEnthalpy.value}
            liquidSurfaceAbsorptivity={substrate.liquidSurfaceAbsorptivity.value}
            thermalConductivity={substrate.thermalConductivity.value}
            specificHeat={substrate.specificHeat.value}
            isAddedToFilter={substrate.isAddedToFilter}
            isFilter={isFilter}
          />
        )}
      </div>
    </>
  )
}

export default Substrates
