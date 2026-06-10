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
var TextHeight_exports = {};
__export(TextHeight_exports, {
  default: () => TextHeight_default
});
module.exports = __toCommonJS(TextHeight_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TextHeightThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M312 32H8C3.578 32 0 35.578 0 40V120C0 124.422 3.578 128 8 128S16 124.422 16 120V48H152V464H72C67.578 464 64 467.578 64 472S67.578 480 72 480H248C252.422 480 256 476.422 256 472S252.422 464 248 464H168V48H304V120C304 124.422 307.578 128 312 128S320 124.422 320 120V40C320 35.578 316.422 32 312 32ZM562.344 378.344L488 452.688V59.312L562.344 133.656C563.906 135.219 565.953 136 568 136S572.094 135.219 573.656 133.656C576.781 130.531 576.781 125.469 573.656 122.344L485.656 34.344C482.531 31.219 477.469 31.219 474.344 34.344L386.344 122.344C383.219 125.469 383.219 130.531 386.344 133.656S394.531 136.781 397.656 133.656L472 59.312V452.688L397.656 378.344C396.094 376.781 394.047 376 392 376S387.906 376.781 386.344 378.344C383.219 381.469 383.219 386.531 386.344 389.656L474.344 477.656C477.469 480.781 482.531 480.781 485.656 477.656L573.656 389.656C576.781 386.531 576.781 381.469 573.656 378.344S565.469 375.219 562.344 378.344Z" })
  }
));
TextHeightThin.displayName = "TextHeightThin";
var TextHeight_default = TextHeightThin;
