// components/PantryItem.js
import { Card, CardContent, Typography, Button } from '@mui/material';

const PantryItem = ({ item, onUpdate, onDelete }) => (
  <Card>
    <CardContent>
      <Typography variant="h5">{item.name}</Typography>
      <Typography color="textSecondary">Quantity: {item.quantity}</Typography>
      <Button onClick={() => onUpdate(item.id)}>Update</Button>
      <Button onClick={() => onDelete(item.id)}>Delete</Button>
    </CardContent>
  </Card>
);

export default PantryItem;
