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
var Cauldron_exports = {};
__export(Cauldron_exports, {
  default: () => Cauldron_default
});
module.exports = __toCommonJS(Cauldron_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CauldronRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M160 64C177.625 64 192 49.625 192 32S177.625 0 160 0S128 14.375 128 32S142.375 64 160 64ZM424 208C437.254 208 448 197.254 448 184C448 170.744 437.254 160 424 160H24C10.746 160 0 170.744 0 184C0 197.254 10.746 208 24 208H44.965C16.943 252.076 0 300.691 0 340C0 372.236 11.824 402.318 32 428.133V488C32 501.254 42.746 512 56 512S80 501.254 80 488V471.557C118.975 496.75 169.191 512 224 512S329.025 496.75 368 471.557V488C368 501.254 378.746 512 392 512S416 501.254 416 488V428.135C436.178 402.32 448 372.236 448 340C448 300.691 431.057 252.076 403.035 208H424ZM224 464C126.969 464 48 408.375 48 340C48 304.348 69.461 251.172 103.387 208H344.613C378.539 251.172 400 304.348 400 340C400 408.375 321.031 464 224 464ZM272 128C298.5 128 320 106.5 320 80S298.5 32 272 32S224 53.5 224 80S245.5 128 272 128Z" })
  }
));
CauldronRegular.displayName = "CauldronRegular";
var Cauldron_default = CauldronRegular;
