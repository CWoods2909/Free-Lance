import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "@mui/material";


export default function AboutUsCard({person}) {
    const {firstName, lastName, image, description, linkedinUrl, gitHubUrl} = person;

    return (
        <Card sx={{ 
            maxWidth: 345 , 
            maxHeight: 600,
            borderRadius: "10% 10% 0 0 ",
            transition: 'all 0.3s ease-in-out',
            '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)', }}}>
            <CardMedia
                sx={{ height: 300, width: "100%", objectFit: "stretch" }}
                image={image} /><CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {firstName + " " + lastName}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "text.secondary" }}>
                        {description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link 
                    href={linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="none"
                >
                    <Button size="small">LinkedIn</Button>
                </Link>
                <Link 
                    href={gitHubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="none"
                >
                    <Button size="small">GitHub</Button>
                </Link>
                </CardActions>
                
        </Card>
    );
}
