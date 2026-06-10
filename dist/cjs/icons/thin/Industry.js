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
var Industry_exports = {};
__export(Industry_exports, {
  default: () => Industry_default
});
module.exports = __toCommonJS(Industry_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const IndustryThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M487.922 128C483.625 128 479.215 129.172 475.125 131.762L336 224V152.012C336 137.961 324.434 128 311.922 128C307.625 127.996 303.215 129.172 299.125 131.762L160 224V64C160 46.328 145.672 32 128 32H32C14.328 32 0 46.328 0 64V448C0 465.672 14.328 480 32 480H480C497.672 480 512 465.672 512 448V152.012C512 137.961 500.434 128 487.922 128ZM144 464H32C23.176 464 16 456.824 16 448V64C16 55.176 23.176 48 32 48H128C136.824 48 144 55.176 144 64V464ZM496 448C496 456.836 488.836 464 480 464H160V243.195L307.68 145.281C313.336 141.707 320 146.098 320 152.012V238.898C320 245.281 327.102 249.094 332.422 245.57L483.68 145.281C489.336 141.707 496 146.098 496 152.012V448Z" })
  }
));
IndustryThin.displayName = "IndustryThin";
var Industry_default = IndustryThin;
