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
var SquareW_exports = {};
__export(SquareW_exports, {
  default: () => SquareW_default
});
module.exports = __toCommonJS(SquareW_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SquareWDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H384C419.348 480 448 451.346 448 416V96C448 60.654 419.348 32 384 32ZM366.938 159.062L302.938 367.062C299.844 377.141 290.516 384 280 384H279.578C268.875 383.812 259.609 376.562 256.828 366.234L224 244.312L191.172 366.234C188.391 376.562 179.125 383.812 168.422 384C157.688 383.984 148.203 377.266 145.062 367.062L81.062 159.062C77.156 146.391 84.266 132.953 96.938 129.062C109.594 125.203 123.031 132.266 126.938 144.938L166.469 273.391L200.828 145.766C203.641 135.281 213.141 128 224 128S244.359 135.281 247.172 145.766L281.531 273.391L321.063 144.937C324.953 132.266 338.406 125.234 351.063 129.062C363.734 132.953 370.844 146.391 366.938 159.062Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M351.071 129.062C338.415 125.234 324.962 132.266 321.071 144.938L281.54 273.391L247.181 145.766C244.368 135.281 234.868 128 224.009 128S203.65 135.281 200.837 145.766L166.478 273.391L126.946 144.938C123.04 132.266 109.603 125.203 96.946 129.062C84.275 132.953 77.165 146.391 81.071 159.062L145.071 367.062C148.212 377.266 157.696 383.984 168.431 384C179.134 383.812 188.4 376.562 191.181 366.234L224.009 244.312L256.837 366.234C259.618 376.562 268.884 383.812 279.587 384H280.009C290.525 384 299.853 377.141 302.946 367.062L366.946 159.062C370.853 146.391 363.743 132.953 351.071 129.062Z" })
    ]
  }
));
SquareWDuotone.displayName = "SquareWDuotone";
var SquareW_default = SquareWDuotone;
