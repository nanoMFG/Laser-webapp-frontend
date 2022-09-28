import React, {useContext} from 'react'
import {ExperimentContext} from "../../pages/ExperimentView";

const DetailLaser= () => {
  const {experiment} = useContext(ExperimentContext)
  const laser = experiment.laser
  if (!laser) {
    return null
  }
  const beamDiameterD1 = laser.beam_diameterD1.value
  const beamDiameterD2 = laser.beam_diameterD2.value
  const power = laser.power.value
  const scanSpeed = laser.scan_speed.value
  const wavelength = laser.wavelength.value
  const substrateTemperature = laser.substrate_temperature.value
  const inertGas = laser.inert_gas.value
  const oxygenLevel = laser.oxygen_level.value

  const displayBeamDiameterD1 =
    beamDiameterD1
      ? <span className='md:w-1/2'>{beamDiameterD1} mm</span>
      : <span className='md:w-1/2'>-</span>

  const displayBeamDiameterD2 =
    beamDiameterD2
      ? <span className='md:w-1/2'>{beamDiameterD2} mm</span>
      : <span className='md:w-1/2'>-</span>

  const displayPower =
    power
      ? <span className='md:w-1/2'>{power} TODO:UNIT?</span>
      : <span className='md:w-1/2'>-</span>

  const displayScanSpeed =
    scanSpeed
      ? <span className='md:w-1/2'>{scanSpeed} TODO:UNIT?</span>
      : <span className='md:w-1/2'>-</span>

  const displayWavelength =
    wavelength
      ? <span className='md:w-1/2'>{wavelength} TODO:UNIT?</span>
      : <span className='md:w-1/2'>-</span>
  
  const displaySubstrateTemperature=
    substrateTemperature
      ? <span className='md:w-1/2'>{substrateTemperature} TODO:UNIT?</span>
      : <span className='md:w-1/2'>-</span>
  
  const displayInertGas =
    inertGas
      ? <span className='md:w-1/2'>{inertGas} TODO:UNIT?</span>
      : <span className='md:w-1/2'>-</span>
  
  const displayOxygenLevel =
    oxygenLevel
      ? <span className='md:w-1/2'>{oxygenLevel} TODO:UNIT?</span>
      : <span className='md:w-1/2'>-</span>

  return (
    <div className='flex flex-col py-2 px-4 mb-2 border'>
      <div className='flex justify-between'>
        <h6 className='font-bold ml-3'> Furnace #{laser.id}</h6>
      </div>
      <hr className='my-1'/>
      <div className='w-full md:flex md:items-center mb-1'>
        <span className='md:w-1/2 block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'>Beam Diameter D1 :</span>
        {displayBeamDiameterD1}
      </div>
      <div className='w-full md:flex md:items-center mb-1'>
        <span className='md:w-1/2 block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'>Beam Diameter D2 :</span> 
        {displayBeamDiameterD2}
      </div>
      <div className='w-full md:flex md:items-center mb-1'>
        <span className='md:w-1/2 block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'>Power :</span>
        {displayPower}
      </div>
      <div className='w-full md:flex md:items-center mb-1'>
        <span className='md:w-1/2 block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'>Scan Speed :</span>
        {displayScanSpeed}
      </div>
      <div className='w-full md:flex md:items-center mb-1'>
        <span className='md:w-1/2 block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'>Wavelength :</span>
        {displayWavelength}
      </div>
      <div className='w-full md:flex md:items-center mb-1'>
        <span className='md:w-1/2 block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'>Substrate Temperature :</span> 
        {displaySubstrateTemperature}
      </div>
      <div className='w-full md:flex md:items-center mb-1'>
        <span className='md:w-1/2 block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'>Inert Gas :</span>
        {displayInertGas}
      </div>
      <div className='w-full md:flex md:items-center mb-1'>
        <span className='md:w-1/2 block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'>Oxygen Level :</span>
        {displayOxygenLevel}
      </div>
    </div>
  )
}

export default DetailLaser
