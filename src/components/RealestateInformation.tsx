import CustomMultipleSelect from './CustomMultipleSelect'
import CustomRadioGroup from './CustomRadioGroup'
import CustomSelect from './CustomSelect'
import LocationCityIcon from '@mui/icons-material/LocationCity';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import CameraRearIcon from '@mui/icons-material/CameraRear';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
const ourCities = ['Cairo' , 'Alex' , 'Dubi' , 'Other']
const RealestateInformation = () => {
  return (
    <>
      <CustomRadioGroup options={['Yes' , 'No']} name='currentHome' label='*Are You Statisify About Your Current Home'/>
      <CustomRadioGroup options={['Yes' , 'No']} name='buyHome' label='*Have You Buy A Home Before'/>
      <CustomSelect Icon={AddBusinessIcon} name='reason'
       placeholder='Reason of Buying A new House..' label='*Why Buy New House' 
       options={['I Will Marry' , 'I am Here For Work' , 'I Want Bigger House' , 'For Investment']}/>
       <CustomSelect Icon={Diversity3Icon} name='with'
       placeholder='Who Will Live In With You...' label='*People With You' 
       options={['Alone' , 'With My Freinds' , 'With My Parents' , 'With My wife ' , 'None']}/>
       <CustomSelect Icon={GroupAddIcon} name='howMany'
       placeholder='How Many Pepoles Will Live There...' label='*How Many' 
       options={['1-2 Person' , '2-5 Person' , '5-7 Person' , 'More Than 7 Person' ]}/>
       <CustomSelect Icon={CameraRearIcon} name='area'
       placeholder='What Is The Range Of Home Area...' label='*Home Area' 
       options={['100-200M' , '200-300M' , '300-500M' , 'More Than 500M' ]}/>
      <CustomMultipleSelect Icon={LocationCityIcon} name='prefer' label='*Prefered Cities' options={ourCities}/>
    </>
  )
}

export default RealestateInformation