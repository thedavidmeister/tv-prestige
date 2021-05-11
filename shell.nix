let
 pkgs = import <nixpkgs> {};

 local-node = pkgs.writeShellScriptBin "local-node" ''
  hardhat node
 '';

 local-fork = pkgs.writeShellScriptBin "local-fork" ''
 hardhat node --fork https://eth-mainnet.alchemyapi.io/v2/G0Vg_iZFiAuUD6hjXqcVg-Nys-NGiTQy --fork-block-number 11833335
 '';

 local-test = pkgs.writeShellScriptBin "local-test" ''
 hardhat test --network localhost
 '';

 local-deploy = pkgs.writeShellScriptBin "local-deploy" ''
  hardhat run --network localhost scripts/deploy-test.ts
 '';

 mumbai-deploy-tvk = pkgs.writeShellScriptBin "mumbai-deploy-tvk" ''
  hardhat run --network matic scripts/deploy-mumbai-testtvk.ts
 '';

 mumbai-deploy-prestige = pkgs.writeShellScriptBin "mumbai-deploy-prestige" ''
  hardhat run --network matic scripts/deploy-mumbai-prestige.ts
 '';

 ci-test = pkgs.writeShellScriptBin "ci-test" ''
 hardhat test
 '';

 ci-lint = pkgs.writeShellScriptBin "ci-lint" ''
 solhint 'contracts/**/*.sol'
 '';

 security-check = pkgs.writeShellScriptBin "security-check" ''
 rm -rf venv
 rm -rf artifacts
 rm -rf cache
 rm -rf node_modules
 npm install
 python3 -m venv venv
 source ./venv/bin/activate
 pip install slither-analyzer
 slither .
 '';
in
pkgs.stdenv.mkDerivation {
 name = "shell";
 buildInputs = [
  pkgs.nodejs-14_x
  pkgs.python3
  local-node
  local-fork
  local-test
  mumbai-deploy-tvk
  mumbai-deploy-prestige
  local-deploy
  ci-test
  ci-lint
  security-check
 ];

 shellHook = ''
  export PATH=$( npm bin ):$PATH
  # keep it fresh
  npm install
 '';
}
