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
var ChartLineUp_exports = {};
__export(ChartLineUp_exports, {
  default: () => ChartLineUp_default
});
module.exports = __toCommonJS(ChartLineUp_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ChartLineUpRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M488 432H48V56C48 42.744 37.254 32 24 32S0 42.744 0 56V448C0 465.6 14.4 480 32 480H488C501.254 480 512 469.254 512 456C512 442.744 501.254 432 488 432ZM144.969 304.969L208 241.938L287.031 320.969C291.719 325.656 297.844 328 304 328S316.281 325.656 320.969 320.969L432 209.938V264C432 277.25 442.75 288 456 288S480 277.25 480 264V152C480 138.75 469.25 128 456 128H344C330.75 128 320 138.75 320 152S330.75 176 344 176H398.062L304 270.062L224.969 191.031C215.594 181.656 200.406 181.656 191.031 191.031L111.031 271.031C101.656 280.406 101.656 295.594 111.031 304.969S135.594 314.344 144.969 304.969Z" })
  }
));
ChartLineUpRegular.displayName = "ChartLineUpRegular";
var ChartLineUp_default = ChartLineUpRegular;
