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
var ArrowDownToSquare_exports = {};
__export(ArrowDownToSquare_exports, {
  default: () => ArrowDownToSquare_default
});
module.exports = __toCommonJS(ArrowDownToSquare_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowDownToSquareDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 128H304V192H384V448H64V192H144V128H64C28.719 128 0 156.719 0 192V448C0 483.281 28.719 512 64 512H384C419.281 512 448 483.281 448 448V192C448 156.719 419.281 128 384 128Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M159.595 250.664L192 286.062V32.031C192 14.328 206.328 0 224 0S256 14.328 256 32.031V286.063L288.404 250.664C299.722 238.328 319.908 236.121 333.623 248.695C346.652 260.648 347.527 280.914 335.591 293.961L247.593 390.055C235.468 403.313 212.531 403.313 200.406 390.055L112.408 293.961C100.472 280.914 101.347 260.648 114.377 248.695C127.392 236.75 147.642 237.656 159.595 250.664Z" })
    ]
  }
));
ArrowDownToSquareDuotone.displayName = "ArrowDownToSquareDuotone";
var ArrowDownToSquare_default = ArrowDownToSquareDuotone;
