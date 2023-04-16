import React from 'react'
import CustomRadioGroup from './CustomRadioGroup'
import CustomSelect from './CustomSelect'
import Diversity3Icon from '@mui/icons-material/Diversity3';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import CameraRearIcon from '@mui/icons-material/CameraRear';
import WorkIcon from '@mui/icons-material/Work';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import CustomInput from './CustomInput';
const PaymentInformation = () => {
  return (
    <>
      <CustomRadioGroup key={'pay'} options={['Cash' , 'installment']} name='payWay' label='*Way For Pay'/>
      <CustomRadioGroup key={'pay'} options={['Buy' , 'Rent']} name='rentOrBuy' label='*Buy Or Rent'/>
      <CustomSelect Icon={CurrencyExchangeIcon} name='income' 
       placeholder='What Is Your Income Per Month...' label='*Income' 
       options={['2000-5000 LE Month' , '5000-10000 LE Month' , '10000-15000 LE Month' , 'More Than 15000 LE Month']}/>
       <CustomSelect Icon={WorkIcon} name='job'
       placeholder='Select Your Job...' label='*Your Job' 
       options={['Developer' , 'Doctor' , 'HR' , 'Sales' , 'Other']}/>
       <CustomInput Icon={WorkIcon} name='otherJob' label='*Job' placeholder='Type N/A If Already Select One'/>
      </> 
  )
}

export default PaymentInformation