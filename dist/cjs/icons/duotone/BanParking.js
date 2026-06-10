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
var BanParking_exports = {};
__export(BanParking_exports, {
  default: () => BanParking_default
});
module.exports = __toCommonJS(BanParking_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BanParkingDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M176 352C176 369.6 190.4 384 208 384H208C225.6 384 240 369.6 240 352V334.945L176 284.783V352ZM272 128H208C190.4 128 176 142.4 176 160V162.799L240 212.961V192H272C289.625 192 304 206.375 304 224C304 235.529 297.523 245.211 288.336 250.846L339.395 290.863C352.574 278.154 362.412 262.098 366.113 243.23C378.125 181.998 331.166 128 272 128Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 432C158.953 432 80 353.047 80 256C80 223.707 88.893 193.516 104.135 167.471L378.264 382.328C346.57 413.01 303.49 432 256 432ZM407.865 344.529L133.736 129.672C165.43 98.99 208.51 80 256 80C353.047 80 432 158.953 432 256C432 288.293 423.107 318.484 407.865 344.529Z" })
    ]
  }
));
BanParkingDuotone.displayName = "BanParkingDuotone";
var BanParking_default = BanParkingDuotone;
