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
var ChairOffice_exports = {};
__export(ChairOffice_exports, {
  default: () => ChairOffice_default
});
module.exports = __toCommonJS(ChairOffice_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ChairOfficeRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M402.461 294.25C395.086 272.25 374.961 257.5 351.959 256.375V64C351.959 28.625 323.334 0 287.957 0H159.953C124.578 0 95.951 28.625 95.951 64V256.375C72.951 257.5 52.824 272.25 45.574 294.25L34.824 326.25C29.199 343.375 32.074 362.25 42.574 376.75S69.949 400 87.951 400H199.955V464H152C138.746 464 128 474.744 128 488C128 501.254 138.746 512 152 512H296C309.254 512 320 501.254 320 488C320 474.744 309.254 464 296 464H247.957V400H359.961C377.959 400 394.961 391.25 405.461 376.75C415.961 362.125 418.838 343.375 413.086 326.25L402.461 294.25ZM143.953 64C143.953 55.125 151.078 48 159.953 48H287.957C296.832 48 303.959 55.125 303.959 64V256H143.953V64ZM359.961 352H87.951C82.576 352 78.576 346.75 80.326 341.5L91.076 309.5C92.076 306.125 95.201 304 98.576 304H349.334C352.709 304 355.834 306.25 356.959 309.5L367.586 341.5C369.336 346.75 365.336 352 359.961 352ZM64 232V152C64 138.75 53.25 128 40 128S16 138.75 16 152V232C16 245.25 26.75 256 40 256S64 245.25 64 232ZM408 128C394.75 128 384 138.75 384 152V232C384 245.25 394.75 256 408 256S432 245.25 432 232V152C432 138.75 421.25 128 408 128Z" })
  }
));
ChairOfficeRegular.displayName = "ChairOfficeRegular";
var ChairOffice_default = ChairOfficeRegular;
