import React from "react";
import {
  Input,
  Box,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { MdClose, MdSearch } from "react-icons/md";

export function AppSearch() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isDirty },
    setFocus,
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    reset();
  };

  const inputRef = React.useRef();

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputGroup
          variant="none"
          title="Search"
          borderRadius={4}
          bg="white"
          maxW={550}
        >
          <InputLeftElement
            pointerEvents="none"
            children={<MdSearch color="gray" />}
          />
          <Input ref={inputRef} placeholder="Search" {...register("search")} />
          <InputRightElement
            hidden={!isDirty}
            onClick={() => {
              reset();
              setTimeout(() => setFocus("search"), 0);
            }}
            children={<MdClose color="gray" />}
          />
        </InputGroup>
      </form>
    </Box>
  );
}
