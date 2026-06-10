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
var Transgender_exports = {};
__export(Transgender_exports, {
  default: () => Transgender_default
});
module.exports = __toCommonJS(Transgender_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TransgenderThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M488 0H368C363.578 0 360 3.578 360 8S363.578 16 368 16H468.688L371.256 113.432C342.137 83.082 301.381 64 256 64C167.635 64 96 135.635 96 224C96 309.734 163.6 379.137 248.32 383.227C248.287 383.52 248 383.697 248 384V432H184C179.578 432 176 435.578 176 440S179.578 448 184 448H248V504C248 508.422 251.578 512 256 512S264 508.422 264 504V448H328C332.422 448 336 444.422 336 440S332.422 432 328 432H264V384C264 383.697 263.713 383.52 263.68 383.227C348.4 379.137 416 309.734 416 224C416 186.799 402.781 153.002 381.484 125.828L480 27.312V128C480 132.422 483.578 136 488 136S496 132.422 496 128V8C496 3.578 492.422 0 488 0ZM256 368C176.598 368 112 303.402 112 224S176.598 80 256 80S400 144.598 400 224S335.402 368 256 368Z" })
  }
));
TransgenderThin.displayName = "TransgenderThin";
var Transgender_default = TransgenderThin;
