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
var LayersMinus_exports = {};
__export(LayersMinus_exports, {
  default: () => LayersMinus_default
});
module.exports = __toCommonJS(LayersMinus_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LayersMinusThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M495.234 357.922C491.234 356.14 486.5 357.984 484.688 362.016C482.906 366.048 484.75 370.767 488.797 372.548C493.312 374.549 496 378.83 496 383.987S493.312 393.425 488.797 395.426L263.109 494.529C258.609 496.498 253.422 496.53 248.922 494.561L23.203 395.426C18.688 393.425 16 389.144 16 383.987S18.688 374.549 23.203 372.548C27.25 370.767 29.094 366.048 27.313 362.016S20.859 356.14 16.766 357.922C6.422 362.454 0 372.455 0 383.987S6.422 405.52 16.766 410.052L242.516 509.218C246.797 511.062 251.391 512 255.984 512C260.594 512 265.203 511.062 269.516 509.187L495.234 410.052C505.578 405.52 512 395.519 512 383.987S505.578 362.454 495.234 357.922ZM495.234 261.912L269.422 162.683C260.906 159.12 251.125 159.089 242.484 162.746L16.766 261.912C6.422 266.444 0 276.445 0 287.977S6.422 309.511 16.766 314.042L242.516 413.209C246.797 415.053 251.391 415.99 255.984 415.99C260.594 415.99 265.203 415.053 269.516 413.177L495.234 314.042C505.578 309.511 512 299.51 512 287.977S505.578 266.444 495.234 261.912ZM488.797 299.416L263.109 398.52C258.609 400.489 253.422 400.52 248.922 398.551L23.203 299.416C18.688 297.416 16 293.134 16 287.977S18.688 278.539 23.203 276.539L248.828 177.435C253.391 175.435 258.609 175.497 263.078 177.372L488.797 276.539C493.312 278.539 496 282.821 496 287.977S493.312 297.416 488.797 299.416ZM328 104.002H504C508.406 104.002 512 100.423 512 96.001C512 91.578 508.406 88 504 88H328C323.594 88 320 91.578 320 96.001C320 100.423 323.594 104.002 328 104.002Z" })
  }
));
LayersMinusThin.displayName = "LayersMinusThin";
var LayersMinus_default = LayersMinusThin;
