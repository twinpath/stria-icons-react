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
var CircleArrowDownRight_exports = {};
__export(CircleArrowDownRight_exports, {
  default: () => CircleArrowDownRight_default
});
module.exports = __toCommonJS(CircleArrowDownRight_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CircleArrowDownRightDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.422 16 16 123.422 16 256S123.422 496 256 496S496 388.578 496 256S388.578 16 256 16ZM376 344C376 361.688 361.672 376 344 376H200C182.328 376 168 361.688 168 344S182.328 312 200 312H266.75L145.375 190.625C132.875 178.125 132.875 157.875 145.375 145.375S178.125 132.875 190.625 145.375L312 266.75V200C312 182.312 326.328 168 344 168S376 182.312 376 200V344Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M376 342.958C376 360.646 361.672 374.958 344 374.958H200C182.328 374.958 168 360.646 168 342.958S182.328 310.958 200 310.958H266.75L145.375 189.583C132.875 177.083 132.875 156.833 145.375 144.333S178.125 131.833 190.625 144.333L312 265.708V198.958C312 181.271 326.328 166.958 344 166.958S376 181.271 376 198.958V342.958Z" })
    ]
  }
));
CircleArrowDownRightDuotone.displayName = "CircleArrowDownRightDuotone";
var CircleArrowDownRight_default = CircleArrowDownRightDuotone;
