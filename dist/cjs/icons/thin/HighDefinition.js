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
var HighDefinition_exports = {};
__export(HighDefinition_exports, {
  default: () => HighDefinition_default
});
module.exports = __toCommonJS(HighDefinition_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HighDefinitionThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 32H64C28.654 32 0 60.652 0 96V416C0 451.346 28.654 480 64 480H512C547.346 480 576 451.346 576 416V96C576 60.652 547.346 32 512 32ZM560 416C560 442.467 538.467 464 512 464H64C37.533 464 16 442.467 16 416V96C16 69.533 37.533 48 64 48H512C538.467 48 560 69.533 560 96V416ZM264 160C259.594 160 256 163.578 256 168V248H128V168C128 163.578 124.406 160 120 160S112 163.578 112 168V344C112 348.422 115.594 352 120 352S128 348.422 128 344V264H256V344C256 348.422 259.594 352 264 352S272 348.422 272 344V168C272 163.578 268.406 160 264 160ZM384 160H328C323.594 160 320 163.578 320 168V344C320 348.422 323.594 352 328 352H384C436.938 352 480 308.938 480 256S436.938 160 384 160ZM384 336H336V176H384C428.125 176 464 211.891 464 256S428.125 336 384 336Z" })
  }
));
HighDefinitionThin.displayName = "HighDefinitionThin";
var HighDefinition_default = HighDefinitionThin;
