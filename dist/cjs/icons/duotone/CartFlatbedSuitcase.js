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
var CartFlatbedSuitcase_exports = {};
__export(CartFlatbedSuitcase_exports, {
  default: () => CartFlatbedSuitcase_default
});
module.exports = __toCommonJS(CartFlatbedSuitcase_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CartFlatbedSuitcaseDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M480 48C480 21.5 458.5 0 432 0H336C309.5 0 288 21.5 288 48V320H480V48ZM432 96H336V48H432V96ZM224 320H256V96H224C206.375 96 192 110.375 192 128V288C192 305.625 206.375 320 224 320ZM576 288V128C576 110.375 561.625 96 544 96H512V320H544C561.625 320 576 305.625 576 288ZM253.125 448C254.75 453 256 458.375 256 464C256 490.5 234.5 512 208 512S160 490.5 160 464C160 458.375 161.125 453 162.875 448H253.125ZM541.25 448C542.875 453 544.125 458.375 544.125 464C544.125 490.5 522.625 512 496.125 512S448.125 490.5 448.125 464C448.125 458.375 449.25 453 451 448H541.25Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 96H480V320H512V96ZM288 96H256V320H288V96ZM624 384H128V16C128 7.25 120.75 0 112 0H16C7.25 0 0 7.25 0 16V48C0 56.75 7.25 64 16 64H64V432C64 440.75 71.25 448 80 448H624C632.75 448 640 440.75 640 432V400C640 391.25 632.75 384 624 384Z" })
    ]
  }
));
CartFlatbedSuitcaseDuotone.displayName = "CartFlatbedSuitcaseDuotone";
var CartFlatbedSuitcase_default = CartFlatbedSuitcaseDuotone;
