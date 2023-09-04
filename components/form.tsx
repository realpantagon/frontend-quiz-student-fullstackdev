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


// const [fetchUsers] = useStore((state) => [state.fetchUsers]);

const {
  register,
  handleSubmit,
  reset,
  formState: { errors, isSubmitting, isValid },
} = useForm<Donation>({
  resolver: zodResolver(formSchema),
  mode: 'onTouched',
});

async function sendData(data: Donation) {
  try {
    const res = await axios.post(URL_DATA, data);
    // fetchUsers();
    reset();
  } catch (err) {
    console.log(err);
  }
}


export default function Form() {


  
  return (
    <div id="form">
    <Card withBorder shadow="xs" p="xl" bg="cyan.2">
      <Title order={1} color="blue">
        Donate
      </Title>

      <form
      // onSubmit={handleSubmit(sendData)}
      >
        <Stack spacing={"xs"}>
          <Input.Wrapper
          >
            <Input.Label>First Name</Input.Label>
            <Input
            {...register("firstName")} // ตอนแรกให้มาเป็น object
            type="text"
            id="firstName"
            disabled={isSubmitting}/>
            <ErrorMessage errors={errors} name="firstName" />
            {errors.firstName?.message && errors.firstName?.message}
          </Input.Wrapper>

          <Input.Wrapper>
            <Input.Label>Last Name</Input.Label>
            <Input {...register("lastName")}
              type="text"
              id="lastName"
              disabled={isSubmitting}/>
            <ErrorMessage errors={errors} name="lastName" />
          </Input.Wrapper>

          <Input.Wrapper>
            <Input.Label>Email</Input.Label>
            <Input {...register("email")}
              type="text"
              id="email"
              disabled={isSubmitting}/>
            <ErrorMessage errors={errors} name="email" />
          </Input.Wrapper>

          <Input.Wrapper>
            <Input.Label>Donation Amount</Input.Label>
            <Input {...register("amount")}
              type="number"
              id="amount"
              disabled={isSubmitting}/>
            <ErrorMessage errors={errors} name="amount" />
          </Input.Wrapper>
          <Button>Submit</Button>
        </Stack>
      </form>

    </Card>
    </div>
  );
}
