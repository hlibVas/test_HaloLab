import React, { useState, useEffect } from "react";
import { Formik, Field, Form } from "formik";
import { format } from "date-fns";

import DatePicker from "../../components/DatePicker";
import SelectCity from "../../components/SelectCity";
import SelectDr from "../../components/SelectDr";
import SelectSp from "../../components/SelectSp";
import Spinner from "../../components/Spinner";

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import useFetch from "../../hooks/useFetch";
import * as schemas from "../../constants/schemas";

import useStyles from "./styles";

function DoctorForm() {
  const { data: city, loading: loadingCity } = useFetch(
    "https://run.mocky.io/v3/9fcb58ca-d3dd-424b-873b-dd3c76f000f4"
  );
  const { data: doctorSpecialty, loading: loadingDocSp } = useFetch(
    "https://run.mocky.io/v3/e8897b19-46a0-4124-8454-0938225ee9ca"
  );
  const { data: doctor, loading: loadingDoctor } = useFetch(
    "https://run.mocky.io/v3/3d1c993c-cd8e-44c3-b1cb-585222859c21"
  );
  const classes = useStyles();
  console.log(city, doctorSpecialty, doctor);
  let currentDate = format(new Date(), "yyyy-MM-dd");
  if (loadingDocSp || loadingDoctor || loadingCity)
    return (
      <div className={classes.loadingRoot}>
        <Spinner />
        <Typography className={classes.loading}>LOADING...</Typography>
      </div>
    );
  return (
    <Formik
      initialValues={{
        name: "",
        birthdayDate: "",
        sex: "",
        city: "",
        doctorSpecialty: "",
        doctor: "",
        email: "",
        phone: "",
      }}
      validationSchema={schemas.ADD_DOCTOR_SCHEMA}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {({ values }) => {
        return (
          <Form className={classes.root}>
            <Typography className={classes.label}>Name</Typography>
            <Field className={classes.field} as="input" name="name"></Field>

            <Typography className={classes.label}>Birthday Date</Typography>
            <Field
              name="birthdayDate"
              className={classes.field}
              component={DatePicker}
              selectedDate={values.birthdayDate}
              currentDate={currentDate}
            />

            <Typography className={classes.label}>Sex</Typography>
            <div role="group" aria-labelledby="sex-radio-group">
              <label className={classes.labelSecondary}>
                <Field type="radio" name="sex" value="Male" />
                Male
              </label>
              <label className={classes.labelSecondary}>
                <Field type="radio" name="sex" value="Female" />
                Female
              </label>
            </div>

            <Typography className={classes.label}>City</Typography>
            <Field
              className={classes.field}
              name="city"
              component={SelectCity}
              data={city}
            />

            <Typography className={classes.label}>Doctor Specialty</Typography>
            <Field
              className={classes.field}
              name="doctorSpecialty"
              component={SelectSp}
              data={doctorSpecialty}
              sex={values.sex}
            />

            <Typography className={classes.label}>Doctor</Typography>

            <Field
              className={classes.field}
              name="doctor"
              component={SelectDr}
              data={doctor}
              cityId={values.city}
              specialId={values.doctorSpecialty}
              birthdayDate={values.birthdayDate}
              values={values}
            />

            <Typography className={classes.label}>Email</Typography>
            <Field
              className={classes.field}
              type="email"
              name="email"
              placeholder="Email"
            />

            <Typography className={classes.label}>Mobile number</Typography>
            <Field
              className={classes.field}
              type="input"
              name="phoneNumber"
              placeholder="Mobile number"
            />

            <Button className={classes.submitButton} type="submit">
              Submit
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default DoctorForm;
