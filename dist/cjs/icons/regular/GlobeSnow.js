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
var GlobeSnow_exports = {};
__export(GlobeSnow_exports, {
  default: () => GlobeSnow_default
});
module.exports = __toCommonJS(GlobeSnow_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const GlobeSnowRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M232 80C218.75 80 208 90.75 208 104S218.75 128 232 128S256 117.25 256 104S245.25 80 232 80ZM104 160C90.75 160 80 170.75 80 184S90.75 208 104 208S128 197.25 128 184S117.25 160 104 160ZM328 144C314.75 144 304 154.75 304 168S314.75 192 328 192S352 181.25 352 168S341.25 144 328 144ZM363.25 399C414.75 358 448 295 448 224C448 100.25 347.75 0 224 0S0 100.25 0 224C0 295 33.25 358 84.75 399L38.375 460.75C22.625 481.875 37.625 512 64 512H384C410.375 512 425.375 481.875 409.625 460.75L363.25 399ZM296.875 384H256V336H313.875C328.125 336 335.875 321 326.75 311.125L276 256H291.375C302.125 256 307.875 244.75 301.125 237.25L233.75 164.125C228.75 158.625 219.375 158.625 214.375 164.125L147 237.25C140.25 244.75 146 256 156.75 256H172L121.25 311.125C112.25 321 120 336 134.25 336H192V384H151.125C90.375 356.25 48 295 48 224C48 127 127 48 224 48S400 127 400 224C400 295 357.625 356.25 296.875 384Z" })
  }
));
GlobeSnowRegular.displayName = "GlobeSnowRegular";
var GlobeSnow_default = GlobeSnowRegular;
