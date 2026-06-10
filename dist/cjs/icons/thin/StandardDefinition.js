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
var StandardDefinition_exports = {};
__export(StandardDefinition_exports, {
  default: () => StandardDefinition_default
});
module.exports = __toCommonJS(StandardDefinition_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const StandardDefinitionThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 32H64C28.654 32 0 60.652 0 96V416C0 451.346 28.654 480 64 480H512C547.346 480 576 451.346 576 416V96C576 60.652 547.346 32 512 32ZM560 416C560 442.467 538.467 464 512 464H64C37.533 464 16 442.467 16 416V96C16 69.533 37.533 48 64 48H512C538.467 48 560 69.533 560 96V416ZM384 160H320C315.594 160 312 163.578 312 168V344C312 348.422 315.594 352 320 352H384C436.938 352 480 308.938 480 256S436.938 160 384 160ZM384 336H328V176H384C428.125 176 464 211.891 464 256S428.125 336 384 336ZM193.781 248.172L184.312 245.938C143.625 236.203 123.875 227.078 128.719 204.172C133.312 182.625 165.562 171.797 209.375 177.438C218.562 178.609 229.531 181.031 243.844 185.047C248.031 186.172 252.5 183.75 253.688 179.516C254.906 175.25 252.406 170.844 248.156 169.641C233.062 165.406 221.375 162.828 211.375 161.562C158.406 154.859 119.594 170.188 113.094 200.859C104.125 243.203 151.969 254.656 180.562 261.5L190.156 263.75C234.281 274.047 260.719 282.156 255.281 307.828C250.687 329.375 218.375 340.031 174.594 334.562C160.219 332.797 143.844 327.984 129.375 323.734L122.219 321.641C117.781 320.344 113.5 322.875 112.312 327.109C111.094 331.344 113.531 335.781 117.781 337.016L124.875 339.078C139.906 343.5 156.969 348.516 172.625 350.437C180.937 351.5 188.906 352.016 196.469 352.016C237.125 352.016 265.437 337 270.906 311.141C280 268.281 234.188 257.594 193.781 248.172Z" })
  }
));
StandardDefinitionThin.displayName = "StandardDefinitionThin";
var StandardDefinition_default = StandardDefinitionThin;
