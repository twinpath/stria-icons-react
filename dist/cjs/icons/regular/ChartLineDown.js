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
var ChartLineDown_exports = {};
__export(ChartLineDown_exports, {
  default: () => ChartLineDown_default
});
module.exports = __toCommonJS(ChartLineDown_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ChartLineDownRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M488 432H48V56C48 42.744 37.254 32 24 32S0 42.744 0 56V448C0 465.6 14.4 480 32 480H488C501.254 480 512 469.254 512 456C512 442.744 501.254 432 488 432ZM191.031 256.969C200.406 266.344 215.594 266.344 224.969 256.969L304 177.938L398.062 272H344C330.75 272 320 282.75 320 296S330.75 320 344 320H456C469.25 320 480 309.25 480 296V184C480 170.75 469.25 160 456 160S432 170.75 432 184V238.062L320.969 127.031C311.594 117.656 296.406 117.656 287.031 127.031L208 206.062L144.969 143.031C135.594 133.656 120.406 133.656 111.031 143.031S101.656 167.594 111.031 176.969L191.031 256.969Z" })
  }
));
ChartLineDownRegular.displayName = "ChartLineDownRegular";
var ChartLineDown_default = ChartLineDownRegular;
