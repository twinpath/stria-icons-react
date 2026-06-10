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
var Shuffle_exports = {};
__export(Shuffle_exports, {
  default: () => Shuffle_default
});
module.exports = __toCommonJS(Shuffle_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ShuffleSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M383.971 168V208.031C383.971 229.422 409.836 240.141 424.967 225.016L504.961 145.047C514.348 135.656 514.346 120.438 504.959 111.055L424.959 31.078C409.83 15.953 383.969 26.672 383.969 48.062V88H320C307.406 88 295.562 93.938 288 104L108 344H40C17.906 344 0 361.906 0 384S17.906 424 40 424H128C140.594 424 152.438 418.062 160 408L340 168H383.971ZM424.967 286.984C409.836 271.859 383.971 282.574 383.971 303.969V344H340L293.998 282.664L243.994 349.328L288 408C295.562 418.062 307.406 424 320 424H383.969V463.938C383.969 485.328 409.83 496.043 424.959 480.922L504.959 400.945C514.346 391.559 514.346 376.34 504.959 366.953L424.967 286.984ZM40 168H108L154.002 229.336L204.006 162.672L160 104C152.438 93.938 140.594 88 128 88H40C17.906 88 0 105.906 0 128S17.906 168 40 168Z" })
  }
));
ShuffleSolid.displayName = "ShuffleSolid";
var Shuffle_default = ShuffleSolid;
