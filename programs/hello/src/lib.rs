use anchor_lang::prelude::*;

declare_id!("HCRfNNCXTfj8k78NoBvPjpH9zWjFmizPDK6ovBNt1Bvt");

#[program]
pub mod hello {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
