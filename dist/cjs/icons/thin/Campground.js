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
var Campground_exports = {};
__export(Campground_exports, {
  default: () => Campground_default
});
module.exports = __toCommonJS(Campground_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CampgroundThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M527.578 393.206L298.359 114.869L382.172 13.09C384.984 9.683 384.5 4.652 381.078 1.84C377.688 -0.973 372.656 -0.473 369.828 2.934L288 102.275L206.172 2.934C203.328 -0.504 198.281 -0.988 194.922 1.84C191.5 4.652 191.016 9.683 193.828 13.09L277.641 114.869L48.422 393.19C37.828 406.049 32 422.299 32 438.97V504C32 508.422 35.578 512 40 512H536C540.422 512 544 508.422 544 504V438.97C544 422.299 538.172 406.049 527.578 393.206ZM179.43 496L288 341.895L396.57 496H179.43ZM528 496H416.158L294.547 323.395C291.547 319.145 284.453 319.145 281.453 323.395L159.842 496H48V438.97C48 426.002 52.531 413.362 60.766 403.362L288 127.446L515.234 403.378C523.469 413.362 528 426.002 528 438.97V496Z" })
  }
));
CampgroundThin.displayName = "CampgroundThin";
var Campground_default = CampgroundThin;
