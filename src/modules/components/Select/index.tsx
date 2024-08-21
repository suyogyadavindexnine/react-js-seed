import {
  Select,
  Commonstructure,
  Cardstructure
} from '../../../shared/components/index';

const SelectInput = () => {
  const singleSelectOptionList = [
    {
      label: 'Item 1',
      value: '1'
    },
    {
      label: 'Item 2',
      value: '2'
    },
    {
      label: 'Item 3',
      value: '3'
    }
  ];
  return (
    <>
      <Commonstructure
        titlename="Select-Component"
        heading="Selct"
        subHeading="Selcct Component with different types of properties"
        documentlink="https://mui.com/material-ui/react-select/"
      />

      <Cardstructure
        cardheader="Basic Select dropdown"
        component={
          <>
            <Select
              options={singleSelectOptionList}
              defaultValue={singleSelectOptionList[0].label}
              label="Basic Select dropdown"
              itemText="label"
              itemValue="value"
              // isObject={true}
            />
          </>
        }
      />

      <Cardstructure
        cardheader="Basic Select dropdown with filled variant"
        component={
          <>
            <Select
              options={singleSelectOptionList}
              defaultValue={singleSelectOptionList[0].label}
              label="Basic Select dropdown with filled variant"
              itemText="label"
              itemValue="value"
              isObject={true}
              variant="filled"
            />
          </>
        }
      />
      <Cardstructure
        cardheader="Basic Select dropdown with auto width"
        component={
          <>
            <Select
              options={singleSelectOptionList}
              defaultValue={singleSelectOptionList[0].label}
              label="Basic Select dropdown with auto width"
              itemText="label"
              itemValue="value"
              isObject={true}
              autoWidth={true}
            />
          </>
        }
      />
    </>
  );
};

export default SelectInput;
