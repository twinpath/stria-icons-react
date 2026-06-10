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
var Smoke_exports = {};
__export(Smoke_exports, {
  default: () => Smoke_default
});
module.exports = __toCommonJS(Smoke_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SmokeRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M640 248C640 164.25 571.75 96 488 96C473.625 96 459.625 98.75 446 102.75C418.25 60.25 370.5 32 316 32C296.25 32 276.75 35.875 257.875 43.75C229.625 15.75 191.875 0 152 0C68.25 0 0 68.25 0 152C0 189.75 14.25 224 37.375 250.5C14.375 278.25 0 313.25 0 352C0 440.25 71.75 512 160 512H512C582.625 512 640 454.625 640 384C640 360.25 633 338.125 621.625 318.875C633.125 297.75 640 273.75 640 248ZM592 248C592 259.25 589.875 270.125 586.5 280.25C565.5 265.125 539.875 256 512 256C490.375 256 469.625 261.375 450.875 271.875C423.75 241.5 385.25 224 344 224C319.875 224 296.75 230.125 275.625 241.75C268.75 234.375 261 228.125 252.875 222.25C268.75 194.75 298 176 332 176C347.625 176 362.75 180.25 377.25 188.5L394.875 198.625L407.75 182.75C427.875 158.25 457.125 144 488 144C545.25 144 592 190.75 592 248ZM152 48C183.625 48 213.25 62.625 233.25 88L246 104.125L263.875 94.125C280.625 84.75 298.25 80 316 80C351.25 80 382.375 97.25 402.125 123.625C395.75 128.125 389.25 132.75 383.625 138.25C367 131.375 349.75 128 332 128C279.25 128 233.75 157.625 209.875 200.875C193.875 195.5 177.25 192 160 192C127.75 192 97.75 201.75 72.5 218.25C57.25 200.25 48 177.25 48 152C48 94.75 94.75 48 152 48ZM512 464H160C98.25 464 48 413.75 48 352S98.25 240 160 240C196 240 230.125 257.75 251.25 287.375L265.75 307.75L285.5 292.375C302.75 279.125 323 272 344 272C377.125 272 407.375 289 425.25 317.375L439.75 340.75L460.875 323.125C471.25 314.375 488.5 304.125 512 304.125C556.125 304.125 592 340 592 384.125S556.125 464 512 464Z" })
  }
));
SmokeRegular.displayName = "SmokeRegular";
var Smoke_default = SmokeRegular;
