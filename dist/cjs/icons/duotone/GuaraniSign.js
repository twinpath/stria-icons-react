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
var GuaraniSign_exports = {};
__export(GuaraniSign_exports, {
  default: () => GuaraniSign_default
});
module.exports = __toCommonJS(GuaraniSign_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const GuaraniSignDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M160 441.926V480C160 497.688 174.312 512 191.998 512S223.996 497.688 223.996 480V446.732C218.43 447.223 212.875 448.156 207.309 448.156C191.326 448.156 175.473 445.902 160 441.926ZM160 154.857V357.139C180.053 366.693 202.27 369.879 223.996 366.701V145.305C202.275 142.127 180.057 145.303 160 154.857ZM191.998 0C174.313 0 160 14.328 160 32V70.08C180.896 64.66 202.498 62.717 223.996 64.547V32C223.996 14.328 209.684 0 191.998 0Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M368 264V319.531C368 351.422 354.47 382 330.877 403.469C294.067 433.5 250.445 448.156 207.323 448.156C153.389 448.156 100.268 425.281 62.145 381.125C0.618 309.781 0.618 202.219 62.145 130.891C130.735 51.297 248.102 40.906 329.253 107.156C346.376 121.109 348.939 146.313 334.971 163.422C321.003 180.547 295.755 183.094 278.693 169.125C231.384 130.531 162.857 136.625 122.704 183.141C86.862 224.672 86.862 287.328 122.704 328.859C162.826 375.328 231.353 381.531 278.693 342.859C284.006 337.938 288.005 328.922 288.005 319.531V304H223.986V224H328.003C350.095 224 368 241.906 368 264Z" })
    ]
  }
));
GuaraniSignDuotone.displayName = "GuaraniSignDuotone";
var GuaraniSign_default = GuaraniSignDuotone;
