import React, {useEffect, useState} from 'react'

import Laser from '../components/Laser'
import {defaultPrecision} from "../settings";

const Lasers = ({lasers, isFilter}) => {
  const [beamDiameterD1Min, setBeamDiameterD1Min] = useState(0)
  const [beamDiameterD1Max, setBeamDiameterD1Max] = useState(9999)
  const [beamDiameterD2Min, setBeamDiameterD2Min] = useState(0)
  const [beamDiameterD2Max, setBeamDiameterD2Max] = useState(9999)
  const [powerMin, setPowerMin] = useState(0)
  const [powerMax, setPowerMax] = useState(9999)
  const [scanSpeedMin, setScanSpeedMin] = useState(0)
  const [scanSpeedMax, setScanSpeedMax] = useState(9999)
  const [wavelengthMin, setWavelengthMin] = useState(0)
  const [wavelengthMax, setWavelengthMax] = useState(9999)
  const [substrateTemperatureMin, setSubstrateTemperatureMin] = useState(0)
  const [substrateTemperatureMax, setSubstrateTemperatureMax] = useState(9999)
  const [inertGasMin, setInertGasMin] = useState(0)
  const [inertGasMax, setInertGasMax] = useState(9999)
  const [oxygenLevelMin, setOxygenLevelMin] = useState(0)
  const [oxygenLevelMax, setOxygenLevelMax] = useState(9999)
  const [filteredLasers, setFilteredLasers] = useState(lasers)

  useEffect(() => {
    const filtered = lasers.filter((laser) => {
      const beamDiameterD1 = laser.beam_diameterD1.value
      const beamDiameterD2 = laser.beam_diameterD2.value
      const power = laser.power.value
      const scanSpeed = laser.scan_speed.value
      const wavelength = laser.wavelength.value
      const substrateTemperature = laser.substrate_temperaturer.value
      const inertGas = laser.inert_gas.value
      const oxygenLevel = laser.oxygen_level.value
      return (beamDiameterD1 === null || (beamDiameterD1Min <= beamDiameterD1 && beamDiameterD1 <= beamDiameterD1Max))
        && (beamDiameterD2 === null || (beamDiameterD2Min <= beamDiameterD2 && beamDiameterD2 <= beamDiameterD2Max))
        && (power === null || (powerMin <= power && power <= powerMax))
        && (scanSpeed === null || (scanSpeedMin <= scanSpeed && scanSpeed <= scanSpeedMax))
        && (wavelength === null || (wavelengthMin <= wavelength && wavelength <= wavelengthMax))
        && (substrateTemperature === null || (substrateTemperatureMin <= substrateTemperature && substrateTemperature <= substrateTemperatureMax))
        && (inertGas === null || (inertGasMin <= inertGas && inertGas <= inertGasMax))
        //&& (CSA === null || (CSAMin <= CSA && CSA <= CSAMax))
        //&& (tubeLength === null || (tubeLengthMin <= tubeLength && tubeLength <= tubeLengthMax))
        && (oxygenLevel === null || (oxygenLevelMin <= oxygenLevel && oxygenLevel <= oxygenLevelMax))
    })
    setFilteredLasers(filtered)
  }, [lasers, beamDiameterD1Min, beamDiameterD1Max, beamDiameterD2Min, beamDiameterD2Max, powerMin, powerMax, scanSpeedMin, scanSpeedMax,
    wavelengthMin, wavelengthMax, substrateTemperatureMin, substrateTemperatureMax, inertGasMin, inertGasMax, oxygenLevelMin, oxygenLevelMax])

  if (!lasers) {
    return null
  }
  let scrollbarClass = 'w-full'
  let searchBar
  if (!isFilter) {
    scrollbarClass += ' border p-3 h-screen-3/4  overflow-y-scroll'
    searchBar =
      <div className='flex flex-col border rounded mb-2 p-2'>
        <h6 className='block tracking-wide text-gray-700 font-bold align-middle mx-auto'> Beam Diameter D1 Range (mm)</h6> 
        <div className='flex flex-row justify-center my-2'>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="beam-diameter-d1-min">
              min
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="beam-diameter-d1-min" type="number" step={defaultPrecision} value={beamDiameterD1Min}
              onChange={(e) => setBeamDiameterD1Min(e.target.value)}
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="beam-diameter-d1-max">
              max
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="beam-diameter-d1-max" type="number" step={defaultPrecision} value={beamDiameterD1Max} min={beamDiameterD1Min}
              onChange={(e) => setBeamDiameterD1Max(e.target.value)}
            />
          </div>
        </div>
        <hr/>
        <h6 className='block tracking-wide text-gray-700 font-bold align-middle mx-auto my-2'> Beam Diameter D2 Range (mm)</h6> 
        <div className='flex flex-row justify-center my-2'>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="beam-diameter-d2-min">
              min
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="beam-diameter-d2-min" type="number" step={defaultPrecision} value={beamDiameterD2Min}
              onChange={(e) => setBeamDiameterD2Min(e.target.value)}
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="beam-diameter-d2-max">
              max
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="beam-diameter-d2-max" type="number" step={defaultPrecision} value={beamDiameterD2Max} min={beamDiameterD2Min}
              onChange={(e) => setBeamDiameterD2Max(e.target.value)}
            />
          </div>
        </div>
        <hr/>
        <h6 className='block tracking-wide text-gray-700 font-bold align-middle mx-auto my-2'> Power Range (TODO:UNIT?)</h6>
        <div className='flex flex-row justify-center my-2'>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="power-min">
              min
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="power-min" type="number" step={defaultPrecision} value={powerMin}
              onChange={(e) => setPowerMin(e.target.value)}
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="power-max">
              max
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="power-max" type="number" step={defaultPrecision} value={powerMax} min={powerMin}
              onChange={(e) => setPowerMax(e.target.value)}
            />
          </div>
        </div>
        <hr/>
        <h6 className='block tracking-wide text-gray-700 font-bold align-middle mx-auto my-2'> Scan Speed Range (TODO:UNIT?)</h6>
        <div className='flex flex-row justify-center my-2'>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="scan-speed-min">
              min
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="scan-speed-min" type="number" step={defaultPrecision} value={scanSpeedMin}
              onChange={(e) => setScanSpeedMin(e.target.value)}
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="scan-speed-max">
              max
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="scan-speed-max" type="number" step={defaultPrecision} value={scanSpeedMax} min={scanSpeedMin}
              onChange={(e) => setScanSpeedMax(e.target.value)}
            />
          </div>
        </div>
        <hr/>
        <h6 className='block tracking-wide text-gray-700 font-bold align-middle mx-auto my-2'> Wavelength Range (nm)</h6>
        <div className='flex flex-row justify-center my-2'>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="wavelegnth-min">
              min
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="wavelength-min" type="number" step={defaultPrecision} value={wavelengthMin}
              onChange={(e) => setWavelengthMin(e.target.value)}
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="wavelength-max">
              max
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="wavelength-max" type="number" step={defaultPrecision} value={wavelengthMax} min={wavelengthMin}
              onChange={(e) => setWavelengthMax(e.target.value)}
            />
          </div>
        </div>
        <hr/>
        <h6 className='block tracking-wide text-gray-700 font-bold align-middle mx-auto my-2'> Substrate Temperature Range (TODO:UNIT?)</h6>
        <div className='flex flex-row justify-center my-2'>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="substrate-temperature-min">
              min
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="substrate-temperature-min" type="number" step={defaultPrecision} value={substrateTemperatureMin}
              onChange={(e) => setSubstrateTemperatureMin(e.target.value)}
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="substrate-temperature-max">
              max
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="substrate-temperature-max" type="number" step={defaultPrecision} value={substrateTemperatureMax} min={substrateTemperatureMin}
              onChange={(e) => setSubstrateTemperatureMax(e.target.value)}
            />
          </div>
        </div>
        <hr/>
        <h6 className='block tracking-wide text-gray-700 font-bold align-middle mx-auto my-2'> Inert Gas Range (TODO:UNIT?)</h6>
        <div className='flex flex-row justify-center my-2'>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="inert-gas-min">
              min
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="inert-gas-min" type="number" step={defaultPrecision} value={inertGasMin}
              onChange={(e) => setInertGasMin(e.target.value)}
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="inert-gas-max">
              max
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="inert-gas-max" type="number" step={defaultPrecision} value={inertGasMax} min={inertGasMin}
              onChange={(e) => setInertGasMax(e.target.value)}
            />
          </div>
        </div>
        <hr/>
        <h6 className='block tracking-wide text-gray-700 font-bold align-middle mx-auto my-2'> Oxygen Level Range (TODO:UNIT?)</h6>
        <div className='flex flex-row justify-center my-2'>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="oxygen-level-min">
              min
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="oxygen-level-min" type="number" step={defaultPrecision} value={oxygenLevelMin}
              onChange={(e) => setOxygenLevelMin(e.target.value)}
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="oxygen-level-max">
              max
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="oxygen-level-max" type="number" step={defaultPrecision} value={oxygenLevelMax} min={oxygenLevelMin}
              onChange={(e) => setOxygenLevelMax(e.target.value)}
            />
          </div>
        </div>
      </div>
  }
  return (
    <>
      {searchBar}
      <div className={scrollbarClass}>
        {filteredLasers.map((laser, i) =>
          <Laser
            key={laser.id}
            id={laser.id}
            beamDiameterD1={laser.beam_diameterD1.value}
            beamDiameterD2={laser.beam_diameterD2.value}
            power={laser.power.value}
            scanSpeed={laser.scan_speed.value}
            wavelength={laser.wavelength.value}
            substrateTemperature={laser.substrate_temperature.value}
            inertGas={laser.inert_gas.value}
            oxygenLevel={laser.oxygen_level.value}
            isAddedToFilter={laser.isAddedToFilter}
            isFilter={isFilter}
          />
        )}
      </div>
    </>
  )
}

export default Lasers
