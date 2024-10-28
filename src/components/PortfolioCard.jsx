import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Grid from "@mui/material/Grid2";
import Container from "@mui/material/Container";


export default function PortfolioCard({ site }) {
    const { siteImg, siteTitle, siteDescription } = site;
   
    return (
        <>
            <Container>
                <Grid container spacing={3}>
                        <Card sx={{ maxWidth: 365 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="300"
                                    image={siteImg}
                                    alt="portfolio site"
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="div"
                                    >
                                        {siteTitle}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{ color: "text.secondary" }}
                                    >
                                        {siteDescription}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    
                </Grid>
            </Container>

            
        </>
    );
}
