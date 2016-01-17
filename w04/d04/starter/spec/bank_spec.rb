require_relative 'spec_helper'
require_relative '../bank'

describe Bank do

  describe ".new" do
    it "creates a Bank object" do
      # When Bank.new is called, it should create a bank object
      expect (Bank.new).to eq bank 
    end
    it "has no accounts" do
      # A newly created bank should have 0 accounts
      expect (bank.accounts).to eq(0)
    end
  end

  describe "#name" do
    it "has a name" do
      # Calling bank.name should give us the bank's name
      expect (bank.name).to eq name
    end
  end

  describe "#create_account" do
    it "create an account" do
      # Calling bank.create_account with the correct parameters should add
      # the account name and account value to the bank.accounts hash
      expect (bank.create_account).to eq create_account("account name", value)
    end
  end

  describe "#deposit" do
    it "deposits money from a client" do
      # Calling bank.deposit with the correct parameters should result in an account's value going up by the same amount as the deposit
      expect (bank.deposit).to eq deposit("account name", value + deposit)
    end
  end

  describe "#balance" do
    it "returns the balance for the client" do
      # Calling bank.balance should return the balance of the specified account
      expect (bank.balance).to eq balance("account name")
    end
  end

  describe "#withdraw" do
    it "subtracts money from the account" do
      # Calling bank.withdraw with the correct parameters should result in an account's value going down by the same amount as the withdrawal
      expect (bank.withdraw).to eq withdraw("account name", value - withdraw)
    end

    it "ignores requests for withdrawals greater than account balance" do
      # Calling bank.withdraw with an amount greater than the balance ignores the withdrawal/does nothing
      # expect (bank.withdraw).

    end
  end

end
