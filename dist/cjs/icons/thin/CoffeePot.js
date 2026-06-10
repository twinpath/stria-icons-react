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
var CoffeePot_exports = {};
__export(CoffeePot_exports, {
  default: () => CoffeePot_default
});
module.exports = __toCommonJS(CoffeePot_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CoffeePotThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M431.5 177.625L480 32H72C32.312 32 0 64.297 0 104V216C0 220.422 3.594 224 8 224S16 220.422 16 216V104C16 73.125 41.125 48 72 48H101.338L144.75 178.125C95.375 217.875 64 277.75 64 344.625C64 396.125 82.625 429.375 113.625 462.375C124.5 473.625 139.5 480 155.125 480H420.875C436.5 480 451.5 473.75 462.25 462.375C493.25 429.5 512 396.125 512 344.625C512 278.375 481.375 217.875 431.5 177.625ZM118.205 48H457.807L416.32 172.568L415.178 176H160.908L159.928 173.061L118.205 48ZM153.213 192H423.584C458.818 221.258 482.451 260.617 491.604 304H84.447C93.713 260.668 117.598 221.275 153.213 192ZM450.621 451.385C443.045 459.402 432.203 464 420.875 464H155.125C143.893 464 132.959 459.355 125.287 451.42C98.104 422.484 80 393.248 80 344.625C80 336.326 80.65 328.125 81.688 320H494.342C495.363 328.121 496 336.324 496 344.625C496 393.289 477.854 422.504 450.621 451.385Z" })
  }
));
CoffeePotThin.displayName = "CoffeePotThin";
var CoffeePot_default = CoffeePotThin;
