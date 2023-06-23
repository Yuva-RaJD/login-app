import { FormControl, FormGroup, FormLabel, Input } from "@mui/material";

function DetailForm(props) {
    const {usersData }=props
  return (
    <form>
      <FormGroup
        sx={{
          mt: 2,
          display: "flex",
          gap: 3,
          px: 2,
        }}
      >
        <FormControl color="info">
          <FormLabel>Name</FormLabel>
          <Input
            placeholder="Name"
            variant="outline"
            value={usersData.first_name + " " + usersData.last_name}
            disabled
          />
        </FormControl>
        <FormControl color="info">
          <FormLabel>Email</FormLabel>
          <Input
            size="sm"
            placeholder="Email"
            variant="outline"
            value={usersData.email}
            disabled
          />
        </FormControl>
      </FormGroup>
    </form>
  );
}
export default DetailForm;
