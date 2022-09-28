import React, {useContext} from 'react'
import {GlobalContext} from "../pages/App";

//Need to add beamshape, mode, and tracks. Not sure how to handle those. Review InertGas too. 

const Laser = ({
                   id,
                   beamDiameterD1,
                   beamDiameterD2,
                   power,
                   scanSpeed,
                   wavelength,
                   substrateTemperature,
                   inertGas,
                   oxygenLevel,
                   isAddedToFilter,
                   isFilter
                 }) => {
  const {toolDispatch} = useContext(GlobalContext)

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
      ? <span className='md:w-1/2'>{power} TODO:UNIT?</span> //for power to 2, use &sup2;
      : <span className='md:w-1/2'>-</span>

  const displayScanSpeed =
    scanSpeed
      ? <span className='md:w-1/2'>{scanSpeed} TODO:UNIT?</span>
      : <span className='md:w-1/2'>-</span>

  const displayWavelength =
    wavelength
      ? <span className='md:w-1/2'>{wavelength} TODO:UNIT?</span>
      : <span className='md:w-1/2'>-</span>

  const displaySubstrateTemperature =
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

  let btn = null
  if (isFilter) {
    btn = (
      <button
        className='w-9 h-9 text-center bg-red-500 hover:bg-red-700 text-white text-3xl font-bold rounded focus:outline-none focus:shadow-outline'
        type='button'
        onClick={() => {
          toolDispatch({type: 'DEL_LASER_FILTER', payload: {id: id}})
        }}
      >
        -
      </button>
    )
  } else if (isAddedToFilter) {
    btn = (
      <button
        disabled
        className='cursor-default px-2 h-9 text-center bg-purple-500 text-white text-xl font-bold rounded focus:outline-none focus:shadow-outline'
      >
        Added
      </button>
    )
  } else {
    btn = (
      <button
        className='w-9 h-9 text-center bg-green-500 hover:bg-green-700 text-white text-3xl font-bold rounded focus:outline-none focus:shadow-outline'
        type='button'
        onClick={() => {
          toolDispatch({type: 'ADD_LASER_FILTER', payload: {id: id}})
        }}
      >
        +
      </button>
    )
  }
  return (
    <div className='flex flex-col py-2 px-4 mb-2 border'>
      <div className='flex justify-between'>
        <h6 className='font-bold ml-3'> Laser #{id}</h6>
        {btn}
      </div>
      <hr className='my-1'/>
      <div className='w-full md:flex md:items-center mb-1'>
        <span className='md:w-1/2 block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'>Tube Diameter D1 :</span>
        {displayBeamDiameterD1}
      </div>
      <div className='w-full md:flex md:items-center mb-1'>
        <span className='md:w-1/2 block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'>Tube Diameter D2 :</span>
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

export default Laser
