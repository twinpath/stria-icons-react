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
var PlaneArrival_exports = {};
__export(PlaneArrival_exports, {
  default: () => PlaneArrival_default
});
module.exports = __toCommonJS(PlaneArrival_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PlaneArrivalRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M616 464H24C10.745 464 0 474.745 0 488V488C0 501.255 10.745 512 24 512H616C629.255 512 640 501.255 640 488V488C640 474.745 629.255 464 616 464ZM113.375 312.375C122.5 320.125 133.875 326.125 145.875 329.25L452.25 409.25C474.875 415.125 509.25 420.25 545.5 410.625C579.75 401.5 600.125 385.625 606.25 363.625C612.375 341 602.625 317 577.25 292C556.375 271.375 528.125 256 495.5 247.5L397.5 221.875L294.875 33.75C288.5 22.125 277.75 13.75 264.875 10.375C228.625 0.875 227.125 0 219.125 0C206.25 0 193.625 5.25 184.5 14.75C172.375 27.25 168.125 45.375 173.125 62.001L206.75 172L130 152L106.375 94.875C100.625 80.875 88.75 73.5 74.125 69.625C60 66.001 55.75 64.5 48 64.5C12.625 64.5 0 93.125 0 109.5V194.001C0 208.125 6.25 221.5 17 230.625L113.375 312.375ZM48 109.5L62 113.125L94.625 192.375L277.625 240.125L219.125 48L252.75 56.75L365.375 263.125L483.25 293.875C507.875 300.25 528.625 311.5 543.625 326.125C558.75 341 560.375 349.375 560 350.875C559.5 352.25 553.875 358.75 533.125 364.25C526.375 366 501.5 372.5 464.375 362.75L158 282.75C153 281.5 148.375 279 144.5 275.75L48 194.001V109.5Z" })
  }
));
PlaneArrivalRegular.displayName = "PlaneArrivalRegular";
var PlaneArrival_default = PlaneArrivalRegular;
