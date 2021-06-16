import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import {
    Box, 
    Select, 
    FormControl,
    InputLabel,
    Button,
    Grid, 
    Radio,
    RadioGroup,
    FormControlLabel,
    Typography, 
    MenuItem,
    Divider,
    InputAdornment,
    Card, 
    FilledInput,
    CardActionArea,
    CardContent, } from '@material-ui/core';
import LocalCarWashIcon from '@material-ui/icons/LocalCarWash';
import EvStationIcon from '@material-ui/icons/EvStation';
import BuildIcon from '@material-ui/icons/Build';
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';

    const useStyles = makeStyles((theme) => ({
        root: {
            width: "auto",
            textAlign: "center"
        },
        card: {
            backgroundColor: "#f7f1e4",
            width: "25em"
        },
        formControl: {
            
            backgroundColor: "#f7f1e4",
            minWidth: 500,
            borderRadius: 10,
            border: 0,
        },
        margin: {
            margin: theme.spacing(1),
        },
    }))

    export default function Overview({ carArray }) {
        const classes = useStyles();

        const [creditScore, setCreditScore] = useState('');

        const handleCreditScore = (event) => {
            setCreditScore(event.target.value);
        };

        const [loanTerm, setLoanTerm] = useState(12);

        const handleLoanTerm = (event) => {
            setLoanTerm(event.target.value);
        };
        const [vehiclePrice, setVehiclePrice] = useState(140.000);

        const handleVehiclePrice = (event) => {
            setVehiclePrice(event.target.value);
        };
        const [salesTax, setSalesTax] = useState(0);

        const handleSalesTax = (event) => {
            setSalesTax(event.target.value);
        };
        const [apr, setApr] = useState("yesApr");

        const handleApr = (event) => {
            setApr(event.target.value);
        };
        // console.log(carArray);
        return(
            <div>
                <Grid container direction="column" style={{width: "75%"}}>
                    <Grid item>
                    <Typography variant="h5">
                        <Box fontWeight="fontWeightBold" style={{padding:"20px 0px"}} >
                        Description
                        </Box>
                    </Typography>
                    </Grid>
                    <Grid item>
                    <Typography variant="subtitle2" >
                        {carArray.description}
                        {/* Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type 
                        specimen book. It has survived not only five centuries, but also the leap into 
                        electronic typesetting, remaining essentially unchanged. It was popularised in 
                        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                        and more recently with desktop publishing software like Aldus PageMaker including 
                        versions of Lorem Ipsum. It has survived not only five centuries, but also the 
                        leap into electronic typesetting, remaining essentially unchanged. */}
                    
                    </Typography>
                    </Grid>
                </Grid>
                <Grid container display="flex" spacing={3}>
                    <Grid container style={{padding:"20px 10px"}}>
                    <Typography variant="h5">
                            <Box fontWeight="fontWeightBold">
                                Basic Specs
                            </Box>
                    </Typography>
                    </Grid>
                    <Grid item>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardContent>
                                    <Grid container alignItems="center" >
                                        <Grid item style={{padding:"15px"}}>
                                            <LocalCarWashIcon/>
                                        </Grid>
                                        <Divider orientation="vertical" flexItem />
                                        <Grid item style={{padding:"0px 20px"}}>
                                            <Typography>
                                                Mileage <br/>
                                                <Box fontWeight="fontWeightBold">
                                                
                                                {carArray?.basic_specs[0]?.mileage}
                                                </Box>
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardContent >
                                    <Grid container alignItems="center" >
                                        <Grid item style={{padding:"15px"}}>
                                            <BuildIcon />
                                        </Grid>
                                        <Divider orientation="vertical" flexItem />
                                        <Grid item style={{padding:"0px 20px"}}>
                                            <Typography>
                                                Engine <br/>
                                                <Box fontWeight="fontWeightBold">
                                                {carArray.basic_specs[0].engine}
                                                </Box>
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardContent>
                                    <Grid container alignItems="center" >
                                        <Grid item style={{padding:"15px"}}>
                                            <EvStationIcon />
                                        </Grid>
                                        <Divider orientation="vertical" flexItem />
                                        <Grid item style={{padding:"0px 20px"}}>
                                            <Typography>
                                            Drivetrain <br/>
                                                <Box fontWeight="fontWeightBold">
                                                {carArray.basic_specs[0].drive_train}
                                                </Box>
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardContent direction="row">
                                    <Grid container alignItems="center" >
                                        <Grid item style={{padding:"15px"}}>
                                            <AirportShuttleIcon />
                                        </Grid>
                                        <Divider orientation="vertical" flexItem />
                                        <Grid item style={{padding:"0px 20px"}}>
                                            <Typography>
                                                Style Name <br/>
                                                <Box fontWeight="fontWeightBold">
                                                {carArray.basic_specs[0].style_name}
                                                </Box>
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardContent>
                                    <Grid container alignItems="center" >
                                        <Grid item style={{padding:"15px"}}>
                                            <LocalCarWashIcon/>
                                        </Grid>
                                        <Divider orientation="vertical" flexItem />
                                        <Grid item style={{padding:"0px 20px"}}>
                                            <Typography>
                                                Body Style <br/>
                                                <Box fontWeight="fontWeightBold">
                                                {carArray.basic_specs[0].body_style}
                                                </Box>
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardContent >
                                    <Grid container alignItems="center" >
                                        <Grid item style={{padding:"15px"}}>
                                            <BuildIcon />
                                        </Grid>
                                        <Divider orientation="vertical" flexItem />
                                        <Grid item style={{padding:"0px 20px"}}>
                                            <Typography>
                                                Brake Type <br/>
                                                <Box fontWeight="fontWeightBold">
                                                {carArray.basic_specs[0].brake_type}
                                                </Box>
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardContent>
                                    <Grid container alignItems="center" >
                                        <Grid item style={{padding:"15px"}}>
                                            <EvStationIcon />
                                        </Grid>
                                        <Divider orientation="vertical" flexItem />
                                        <Grid item style={{padding:"0px 20px"}}>
                                            <Typography>
                                                Airbags <br/>
                                                <Box fontWeight="fontWeightBold">
                                                {carArray.basic_specs[0].air_bags}
                                                </Box>
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardContent direction="row">
                                    <Grid container alignItems="center" >
                                        <Grid item style={{padding:"15px"}}>
                                            <AirportShuttleIcon />
                                        </Grid>
                                        <Divider orientation="vertical" flexItem />
                                        <Grid item style={{padding:"0px 20px"}}>
                                            <Typography>
                                                Night Vision <br/>
                                                <Box fontWeight="fontWeightBold">
                                                {carArray.basic_specs[0].night_vision}
                                                </Box>
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardContent>
                                    <Grid container alignItems="center" >
                                        <Grid item style={{padding:"15px"}}>
                                            <LocalCarWashIcon/>
                                        </Grid>
                                        <Divider orientation="vertical" flexItem />
                                        <Grid item style={{padding:"0px 20px"}}>
                                            <Typography>
                                                Passenger Capacity <br/>
                                                <Box fontWeight="fontWeightBold">
                                                {carArray.basic_specs[0].passanger_capacity}
                                                </Box>
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardContent >
                                    <Grid container alignItems="center" >
                                        <Grid item style={{padding:"15px"}}>
                                            <BuildIcon />
                                        </Grid>
                                        <Divider orientation="vertical" flexItem />
                                        <Grid item style={{padding:"0px 20px"}}>
                                            <Typography>
                                                ABS Brake System <br/>
                                                <Box fontWeight="fontWeightBold">
                                                {carArray.basic_specs[0].abs_brake}
                                                </Box>
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardContent>
                                    <Grid container alignItems="center" >
                                        <Grid item style={{padding:"15px"}}>
                                            <EvStationIcon />
                                        </Grid>
                                        <Divider orientation="vertical" flexItem />
                                        <Grid item style={{padding:"0px 20px"}}>
                                            <Typography>
                                                Backup Camera <br/>
                                                <Box fontWeight="fontWeightBold">
                                                {carArray.basic_specs[0].backup_cam}
                                                </Box>
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardContent direction="row">
                                    <Grid container alignItems="center" >
                                        <Grid item style={{padding:"15px"}}>
                                            <AirportShuttleIcon />
                                        </Grid>
                                        <Divider orientation="vertical" flexItem />
                                        <Grid item style={{padding:"0px 20px"}}>
                                            <Typography>
                                                Stereo Sound <br/>
                                                <Box fontWeight="fontWeightBold">
                                                {carArray.basic_specs[0].stereo_sound}
                                                </Box>
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardContent>
                                    <Grid container alignItems="center" >
                                        <Grid item style={{padding:"15px"}}>
                                            <LocalCarWashIcon/>
                                        </Grid>
                                        <Divider orientation="vertical" flexItem />
                                        <Grid item style={{padding:"0px 20px"}}>
                                            <Typography>
                                                ABS Brake System <br/>
                                                <Box fontWeight="fontWeightBold">
                                                {carArray.basic_specs[0].abs_brake}
                                                </Box>
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardContent >
                                    <Grid container alignItems="center" >
                                        <Grid item style={{padding:"15px"}}>
                                            <BuildIcon />
                                        </Grid>
                                        <Divider orientation="vertical" flexItem />
                                        <Grid item style={{padding:"0px 20px"}}>
                                            <Typography>
                                                Traction Control <br/>
                                                <Box fontWeight="fontWeightBold">
                                                {carArray.basic_specs[0].traction_control}
                                                </Box>
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardContent>
                                    <Grid container alignItems="center" >
                                        <Grid item style={{padding:"15px"}}>
                                            <EvStationIcon />
                                        </Grid>
                                        <Divider orientation="vertical" flexItem />
                                        <Grid item style={{padding:"0px 20px"}}>
                                            <Typography>
                                                Parking Assistant <br/>
                                                <Box fontWeight="fontWeightBold">
                                                {carArray.basic_specs[0].parking_assistant}
                                                </Box>
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardContent direction="row">
                                    <Grid container alignItems="center" >
                                        <Grid item style={{padding:"15px"}}>
                                            <AirportShuttleIcon />
                                        </Grid>
                                        <Divider orientation="vertical" flexItem />
                                        <Grid item style={{padding:"0px 20px"}}>
                                            <Typography>
                                                MP3 Player <br/>
                                                <Box fontWeight="fontWeightBold">
                                                {carArray.basic_specs[0].mp3_player}
                                                </Box>
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
                <Grid container display="flex" spacing={3}>
                    <Grid container style={{padding:"30px 10px"}}>
                        <Typography variant="h5">
                                <Box fontWeight="fontWeightBold">
                                    Expenses Calculator
                                </Box>
                        </Typography>
                    </Grid>
                    <Grid item>
                    <FormControl variant="filled" className={classes.formControl}>
                        <InputLabel id="demo-simple-select-filled-label">Credit Score</InputLabel>
                        <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={creditScore}
                        onChange={handleCreditScore}
                        >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                    </Grid>
                    <Grid item>
                    <FormControl variant="filled" className={classes.formControl}>
                        <InputLabel id="demo-simple-select-filled-label">Down Payment</InputLabel>
                        <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={creditScore}
                        onChange={handleCreditScore}
                        >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                    </Grid>
                    <Grid item>
                    <FormControl variant="filled" className={classes.formControl}>
                        <InputLabel id="demo-simple-select-filled-label">Trade-In Value</InputLabel>
                        <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={creditScore}
                        onChange={handleCreditScore}
                        >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                    </Grid>
                    <Grid item>
                    <FormControl variant="filled" className={classes.formControl}>
                        <InputLabel id="demo-simple-select-filled-label">Loan Term and Estimated APR</InputLabel>
                        <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={loanTerm}
                        onChange={handleLoanTerm}
                        >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={12}>12 Mo (%5.0 APR)</MenuItem>
                        <MenuItem value={24}>24 Mo (%5.0 APR)</MenuItem>
                        <MenuItem value={36}>36 Mo (%5.0 APR)</MenuItem>
                        <MenuItem value={48}>48 Mo (%5.0 APR)</MenuItem>
                        </Select>
                    </FormControl>
                        
                    </Grid>
                    <Grid item>
                    <FormControl  className={classes.formControl} variant="filled">
                        <InputLabel htmlFor="filled-adornment-amount">Vehicle Price</InputLabel>
                        <FilledInput
                            style={{height: "55px"}}
                            id="filled-adornment-amount-1"
                            value={vehiclePrice}
                            onChange={handleVehiclePrice}
                            startAdornment={<InputAdornment position="start">{" $ "}</InputAdornment>}
                        />
                    </FormControl>
                    </Grid>
                    <Grid item>
                    <FormControl  className={classes.formControl} variant="filled">
                        <InputLabel htmlFor="filled-adornment-amount">Sales Tax</InputLabel>
                        <FilledInput
                            style={{height: "55px"}}
                            id="filled-adornment-amount-2"
                            value={salesTax}
                            onChange={handleSalesTax}
                            startAdornment={<InputAdornment position="start">{" % "}</InputAdornment>}
                        />
                    </FormControl>
                    </Grid>
                    <Grid item>
                        <Typography className={classes.formControl} style={{height:"55px", padding:"15px"}}>
                            Estimated Payment $600/mo
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography className={classes.formControl} style={{height:"55px", padding:"15px"}}>
                            Vehicle Price $140.000
                        </Typography>
                    </Grid>
                    <Grid item>
                    <FormControl component="fieldset" className={classes.formControl} style={{height:"55px", padding:"8px"}}>
                        <RadioGroup row name="Apr" value={apr} onChange={handleApr}>
                            <FormControlLabel value="yesApr" control={<Radio />} label="Estimate my APR" />
                            <FormControlLabel value="noAPR" control={<Radio />} label="I know my APR" />
                        </RadioGroup>
                    </FormControl>
                    </Grid>
                    <Grid item>
                        <Button
                            variant="contained"
                            // type="submit" 
                            style={{ padding: "10px", width: "200px", height: "50px", }}
                            color="primary"
                            // onClick={createMessage}
                        >
                            View Option
                        </Button>
                    </Grid>
                </Grid>
            </div>
        );
    }