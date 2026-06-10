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
var DryerHeat_exports = {};
__export(DryerHeat_exports, {
  default: () => DryerHeat_default
});
module.exports = __toCommonJS(DryerHeat_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DryerHeatSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 0H64C28.654 0 0 28.654 0 64V464C0 490.4 21.6 512 48 512H400C426.4 512 448 490.4 448 464V64C448 28.654 419.346 0 384 0ZM184 64C197.25 64 208 74.75 208 88S197.25 112 184 112S160 101.25 160 88S170.75 64 184 64ZM64 88C64 74.75 74.75 64 88 64S112 74.75 112 88S101.25 112 88 112S64 101.25 64 88ZM224 448C144.5 448 80 383.5 80 304S144.5 160 224 160S368 224.5 368 304S303.5 448 224 448ZM216 272C216 249.375 204 237.375 195.25 228.625C189.5 222.875 186.125 219.25 184.75 214C183.875 210.5 180.625 208 177 208H160.75C158.375 208 156 209.125 154.5 210.875C153 212.75 152.25 215.125 152.75 217.5C155.5 234.125 165.25 243.875 172.625 251.375C180.5 259.125 184 263 184 272S180.5 284.875 172.75 292.75C164 301.5 152 313.375 152 336C152 358.75 164 370.625 172.75 379.375C178.5 385.125 181.875 388.75 183.25 393.875C184.125 397.5 187.375 400 191 400H207.375C209.75 400 212 398.875 213.5 397.125C215.125 395.25 215.75 392.875 215.375 390.5C212.5 373.875 202.75 364.125 195.375 356.75C187.5 348.875 184 345 184 336C184 327.125 187.5 323.25 195.25 315.375C204 306.625 216 294.625 216 272ZM296 272C296 249.375 284 237.375 275.25 228.625C269.5 222.875 266.125 219.25 264.75 214C263.875 210.5 260.625 208 257 208H240.75C238.375 208 236 209.125 234.5 210.875C233 212.75 232.25 215.125 232.75 217.5C235.5 234.125 245.25 243.875 252.625 251.375C260.5 259.125 264 263 264 272S260.5 284.875 252.75 292.75C244 301.5 232 313.375 232 336C232 358.75 244 370.625 252.75 379.375C258.5 385.125 261.875 388.75 263.25 393.875C264.125 397.5 267.375 400 271 400H287.375C289.75 400 292 398.875 293.5 397.125C295 395.25 295.625 392.875 295.25 390.5C292.5 373.875 282.75 364.125 275.375 356.75C267.5 348.875 264 345 264 336C264 327.125 267.5 323.25 275.25 315.375C284 306.625 296 294.625 296 272Z" })
  }
));
DryerHeatSolid.displayName = "DryerHeatSolid";
var DryerHeat_default = DryerHeatSolid;
