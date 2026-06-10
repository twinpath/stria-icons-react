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
var Podium_exports = {};
__export(Podium_exports, {
  default: () => Podium_default
});
module.exports = __toCommonJS(Podium_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PodiumRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M323.188 464H124.812L90.537 224H42.033L80.234 491.406C81.938 503.219 92.062 512 104 512H344C355.938 512 366.062 503.219 367.766 491.406L405.967 224H357.463L323.188 464ZM424 144H128V136C128 101.172 152.877 72.055 185.797 65.438C193.135 74.148 203.719 80 216 80H296C318.092 80 336 62.09 336 40C336 17.906 318.092 0 296 0H216C202.377 0 190.939 7.246 183.715 17.648C125.293 25.688 80 75.422 80 136V144H24C10.75 144 0 154.75 0 168S10.75 192 24 192H424C437.25 192 448 181.25 448 168S437.25 144 424 144Z" })
  }
));
PodiumRegular.displayName = "PodiumRegular";
var Podium_default = PodiumRegular;
