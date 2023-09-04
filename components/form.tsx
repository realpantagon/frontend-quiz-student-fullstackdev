// import { API_URL } from "@/utils/api";
import { Input, Button, Card, Title, Stack } from "@mantine/core";
import { FC } from "react"; 
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorMessage } from "@hookform/error-message";
import { formSchema } from "@/utils/types";
import axios from "axios";
import DonationList from "@/utils/displayData";
import { type Donation } from "@/utils/types";
import { URL_DATA } from "@/utils";
import useStore from "@/utils/store";


// const [ fetchUsers] = useStore((state) => [
//   state.fetchUsers
// ]);

// const rhf = useForm<Donation>({
//   resolver: zodResolver(formSchema),
//   mode: "onTouched", 
// });

// const { register, handleSubmit, watch, reset, setValue, formState } = rhf;
// const { errors, isSubmitting, isValid } = formState;

// async function sendData(data: Donation) {
//   try {
//     const res = await axios.post(URL_DATA, data);
//     fetchUsers();
//     reset();
//   } catch (err) {
//     console.log(err);
//   }
// }

export default function Form() {


  
  return (
    <div id="form">
    <Card withBorder shadow="xs" p="xl" bg="cyan.2">
      <Title order={1} color="blue">
        Donate
      </Title>

      <form>
        <Stack spacing={"xs"}>
          <Input.Wrapper>
            <Input.Label>First Name</Input.Label>
            <Input />
            <Input.Error>{/* Error goes here */}</Input.Error>
          </Input.Wrapper>

          <Input.Wrapper>
            <Input.Label>Last Name</Input.Label>
            <Input />
            <Input.Error>{/* Error goes here */}</Input.Error>
          </Input.Wrapper>

          <Input.Wrapper>
            <Input.Label>Email</Input.Label>
            <Input />
            <Input.Error>{/* Error goes here */}</Input.Error>
          </Input.Wrapper>

          <Input.Wrapper>
            <Input.Label>Donation Amount</Input.Label>
            <Input />
            <Input.Error>{/* Error goes here */}</Input.Error>
          </Input.Wrapper>
          <Button>Submit</Button>
        </Stack>
      </form>
    </Card>
    </div>
  );
}
