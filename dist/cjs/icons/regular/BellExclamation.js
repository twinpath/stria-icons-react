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
var BellExclamation_exports = {};
__export(BellExclamation_exports, {
  default: () => BellExclamation_default
});
module.exports = __toCommonJS(BellExclamation_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BellExclamationRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M224 513.774C259.375 513.774 288 485.205 288 449.899H160C160 485.205 188.625 513.774 224 513.774ZM439.375 364.316C420 343.607 383.875 312.418 383.875 210.367C383.875 132.768 329.5 70.765 256 55.544V34.71C256.375 23.108 250.25 12.129 240.25 6.266C230.25 0.277 217.75 0.277 207.75 6.266C197.625 12.129 191.625 23.108 192 34.71V55.544C118.5 70.765 64.125 132.768 64.125 210.367C64.125 312.418 28 343.607 8.625 364.316C3 370.18 0 377.915 0 386.024C0.125 402.367 13 417.961 32.125 417.961H415.875C435 417.961 447.875 402.367 448 386.024C448 377.915 445 370.18 439.375 364.316ZM67.5 370.055C88.75 342.11 112 295.825 112 210.991V210.367C112 148.613 162.125 98.585 224 98.585S336 148.613 336 210.367V210.991C336 295.95 359.25 342.11 380.5 370.055H67.5ZM224 257.275C237.25 257.275 248 246.546 248 233.322V153.478C248 140.254 237.25 129.525 224 129.525S200 140.254 200 153.478V233.322C200 246.546 210.75 257.275 224 257.275ZM224 289.244C206.326 289.244 192 303.544 192 321.182S206.326 353.119 224 353.119S256 338.819 256 321.182S241.674 289.244 224 289.244Z" })
  }
));
BellExclamationRegular.displayName = "BellExclamationRegular";
var BellExclamation_default = BellExclamationRegular;
