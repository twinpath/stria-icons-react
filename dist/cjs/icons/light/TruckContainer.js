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
var TruckContainer_exports = {};
__export(TruckContainer_exports, {
  default: () => TruckContainer_default
});
module.exports = __toCommonJS(TruckContainer_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TruckContainerLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M625.938 203.312L564.688 142.062C555.625 133 543.562 128 530.75 128H496C469.531 128 448 149.531 448 176V224V256V352H271.639C257.035 332.678 234.088 320 208 320C181.709 320 158.584 332.854 144 352.438C129.416 332.854 106.293 320 80 320C35.818 320 0 355.816 0 400C0 444.182 35.818 480 80 480C106.293 480 129.416 467.146 144 447.562C158.584 467.146 181.709 480 208 480C252.184 480 288 444.182 288 400C288 394.52 287.438 389.172 286.387 384H448H449.613C448.562 389.172 448 394.52 448 400C448 444.182 483.818 480 528 480C572.184 480 608 444.182 608 400C608 393.699 607.096 387.643 605.719 381.762C625.477 375.814 640 357.67 640 336V237.25C640 224.438 635 212.375 625.938 203.312ZM80 448C53.533 448 32 426.467 32 400S53.533 352 80 352S128 373.533 128 400S106.467 448 80 448ZM208 448C181.533 448 160 426.467 160 400S181.533 352 208 352S256 373.533 256 400S234.467 448 208 448ZM480 176C480 167.172 487.172 160 496 160H530.75C534.953 160 539.078 161.703 542.062 164.688L601.375 224H480V176ZM528 448C501.533 448 480 426.467 480 400S501.533 352 528 352S576 373.533 576 400S554.467 448 528 448ZM608 336C608 344.828 600.828 352 592 352V352.438C577.416 332.854 554.293 320 528 320C509.906 320 493.402 326.232 480 336.361V256H608V336ZM96 112V272C96 280.844 103.156 288 112 288S128 280.844 128 272V112C128 103.156 120.844 96 112 96S96 103.156 96 112ZM192 112V272C192 280.844 199.156 288 208 288S224 280.844 224 272V112C224 103.156 216.844 96 208 96S192 103.156 192 112ZM288 112V272C288 280.844 295.156 288 304 288S320 280.844 320 272V112C320 103.156 312.844 96 304 96S288 103.156 288 112ZM16 320C24.844 320 32 312.844 32 304V80C32 71.172 39.172 64 48 64H368C376.828 64 384 71.172 384 80V304C384 312.844 391.156 320 400 320S416 312.844 416 304V80C416 53.531 394.469 32 368 32H48C21.531 32 0 53.531 0 80V304C0 312.844 7.156 320 16 320Z" })
  }
));
TruckContainerLight.displayName = "TruckContainerLight";
var TruckContainer_default = TruckContainerLight;
