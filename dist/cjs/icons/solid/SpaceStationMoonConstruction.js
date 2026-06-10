var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var SpaceStationMoonConstruction_exports = {};
__export(SpaceStationMoonConstruction_exports, {
  default: () => SpaceStationMoonConstruction_default
});
module.exports = __toCommonJS(SpaceStationMoonConstruction_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SpaceStationMoonConstructionSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 512 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M192 136C178.75 136 168 146.75 168 160S178.75 184 192 184S216 173.25 216 160S205.25 136 192 136ZM384 343.125C341.625 349 298.875 352 256 352C172.115 352 94.023 341.174 25.514 322.408C54.344 422.617 146.518 496 256 496C334.639 496 404.227 458.008 448 399.562V384H384V343.125ZM493.623 224H448V160H368V96H416V77.475C373.518 39.373 317.557 16 256 16C123.451 16 16 123.451 16 256C16 266.361 16.877 276.5 18.15 286.516C87.879 307.496 168.898 320 256 320S424.121 307.496 493.85 286.516C495.123 276.5 496 266.361 496 256C496 245.121 495.025 234.494 493.623 224ZM192 240C147.875 240 112 204.125 112 160S147.875 80 192 80S272 115.875 272 160S236.125 240 192 240Z" })
  }
));
SpaceStationMoonConstructionSolid.displayName = "SpaceStationMoonConstructionSolid";
var SpaceStationMoonConstruction_default = SpaceStationMoonConstructionSolid;
