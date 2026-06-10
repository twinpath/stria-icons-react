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
var Cubes_exports = {};
__export(Cubes_exports, {
  default: () => Cubes_default
});
module.exports = __toCommonJS(Cubes_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CubesSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M555.236 256.557L448 215.76V78.953C448 65.422 439.727 53.309 427.236 48.557L310.473 4.135C303.227 1.377 295.613 0 288 0S272.773 1.377 265.527 4.135L148.764 48.557C136.273 53.309 128 65.422 128 78.953V215.76L20.764 256.557C8.273 261.309 0 273.422 0 286.953V433.045C0 446.578 8.273 458.691 20.764 463.443L137.527 507.865C144.773 510.621 152.387 512 160 512S175.227 510.621 182.473 507.865L288 467.719L393.527 507.865C400.773 510.621 408.387 512 416 512S431.227 510.621 438.473 507.865L555.236 463.443C567.727 458.691 576 446.578 576 433.045V286.953C576 273.422 567.727 261.309 555.236 256.557ZM160 324.52L62.521 292.027L153.721 257.33L250.787 294.258L160 324.52ZM264 425.492L184 455.93V367.113L264 340.445V425.492ZM190.521 84.027L282.598 48.996C284.338 48.336 286.154 48 288 48S291.662 48.336 293.404 48.998L385.479 84.027L288 116.52L190.521 84.027ZM400 129.779V210.326C397.834 210.895 395.641 211.33 393.527 212.135L312 243.15V159.113L400 129.779ZM416 324.52L325.213 294.258L422.277 257.33L513.479 292.027L416 324.52ZM528 422.449L440 455.93V367.113L528 337.779V422.449Z " })
  }
));
CubesSolid.displayName = "CubesSolid";
var Cubes_default = CubesSolid;
