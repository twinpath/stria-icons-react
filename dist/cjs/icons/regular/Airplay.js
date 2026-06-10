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
var Airplay_exports = {};
__export(Airplay_exports, {
  default: () => Airplay_default
});
module.exports = __toCommonJS(Airplay_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const AirplayRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M488 32H88C39.469 32 0 71.469 0 120V328C0 376.531 39.469 416 88 416C101.25 416 112 405.25 112 392S101.25 368 88 368C65.938 368 48 350.062 48 328V120C48 97.938 65.938 80 88 80H488C510.062 80 528 97.938 528 120V328C528 350.062 510.062 368 488 368C474.75 368 464 378.75 464 392S474.75 416 488 416C536.531 416 576 376.531 576 328V120C576 71.469 536.531 32 488 32ZM321.916 286.066C303.291 267.312 272.789 267.312 254.037 286.066L142.033 398.102C112.031 428.234 133.281 480 176.035 480H399.92C442.547 480 464.174 428.234 433.797 398.102L321.916 286.066ZM176.035 431.984L288.039 319.953L400.045 431.984H176.035Z" })
  }
));
AirplayRegular.displayName = "AirplayRegular";
var Airplay_default = AirplayRegular;
