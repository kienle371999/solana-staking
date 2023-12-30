/* eslint-disable @next/next/no-async-client-component */
"use client";

import Image from "next/image";
import { Button, InputAdornment, TextField, Typography } from "@mui/material";
import AppGird from "@mui/material/Unstable_Grid2";
import styles from "./page.module.css";
import { Box, Container } from "@mui/system";
import { useState } from "react";
import { Tab } from "@/utils/constants";
import Stack from "@/components/stack";
import UnStack from "@/components/unstack";

export default function Home() {
  const [tab, setTab] = useState<Tab>(Tab.STACK);

  return (
    <main>
      <Box sx={{ p: 5 }}>
        <AppGird container spacing={3}>
          <AppGird xs={12} textAlign="end">
            <Button variant="contained">Connect</Button>
          </AppGird>
        </AppGird>
        <Container maxWidth="sm" sx={{ textAlign: "center" }}>
          <Typography variant="h3">Stack Solana</Typography>
          <Typography>
            Choose how much you want to stake and earn rewards
          </Typography>
          <AppGird container spacing={3}>
            <AppGird xs={6} textAlign="end">
              <Button variant="contained" onClick={() => setTab(Tab.STACK)}>
                Stack
              </Button>
            </AppGird>
            <AppGird xs={6} textAlign="start">
              <Button variant="contained" onClick={() => setTab(Tab.UNSTACK)}>
                Unstack
              </Button>
            </AppGird>
          </AppGird>
          {tab == Tab.STACK && <Stack />}
          {tab == Tab.UNSTACK && <UnStack />}
        </Container>
      </Box>
    </main>
  );
}
